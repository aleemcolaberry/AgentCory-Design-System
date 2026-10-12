// Icon wrapper: resolves to the design system's own Icon (Lucide names still work through its alias map).
function LucideIcon({ name, size = 22, style }) {
  const { Icon } = window.DesignSystem_ebeb85;
  return <Icon name={name} size={size} style={style} />;
}
Object.assign(window, { LucideIcon });
