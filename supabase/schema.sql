-- ==============================================================================
-- TM SOLUTION - Esquema de Base de Datos para Catálogo de Marcas y Cotizaciones
-- ==============================================================================

-- 1. Crear Tabla de Marcas (Módulo 4)
create table if not exists public.brands (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  category text not null check (category in ('epp', 'herramienta', 'oficina')),
  logo_url text not null,
  website_url text,
  tagline text,
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Índices de Rendimiento para Marcas
create index if not exists idx_brands_category on public.brands(category);
create index if not exists idx_brands_active on public.brands(is_active);
create index if not exists idx_brands_sort on public.brands(sort_order asc);

-- RLS para Marcas
alter table public.brands enable row level security;

create policy "Allow public read access to active brands"
  on public.brands for select
  using (is_active = true);

create policy "Allow authenticated admin manage brands"
  on public.brands for all
  to authenticated
  using (true)
  with check (true);

-- ------------------------------------------------------------------------------
-- 2. Crear Tabla de Solicitudes de Cotización (Módulo 6)
-- ------------------------------------------------------------------------------
create table if not exists public.quotes (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  company text not null,
  phone text not null,
  email text not null,
  category text not null check (category in ('herramientas', 'epp', 'operativo', 'especial', 'general')),
  details text not null,
  status text default 'pending' check (status in ('pending', 'contacted', 'quoted', 'closed')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Índices de Rendimiento para Cotizaciones
create index if not exists idx_quotes_created_at on public.quotes(created_at desc);
create index if not exists idx_quotes_status on public.quotes(status);
create index if not exists idx_quotes_email on public.quotes(email);

-- Habilitar Row Level Security (RLS) en Cotizaciones
alter table public.quotes enable row level security;

-- Política: Permitir inserción anónima desde el formulario web público
create policy "Allow anonymous quote submissions"
  on public.quotes for insert
  with check (true);

-- Política: Solo usuarios autenticados (administradores de TM SOLUTION) pueden leer las cotizaciones
create policy "Allow authenticated users to view quotes"
  on public.quotes for select
  using (auth.role() = 'authenticated');
