const Loader = () => (
  <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-5">
    <div className="relative h-16 w-16">
      <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
      <div className="absolute inset-2 animate-ping-slow rounded-full bg-primary/20" />
    </div>
    <p className="animate-pulse font-mono text-sm tracking-widest text-muted-foreground">
      CARGANDO…
    </p>
  </div>
);

export default Loader;
