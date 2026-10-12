Rounded-tile avatar, defaults to the Cory mascot; also renders user photos or initials.

```jsx
<Avatar kind="cory" size={48} />
<Avatar kind="image" src="/people/sarah.jpg" name="Sarah Johnson" />
<Avatar kind="initials" name="Michael Chen" />
<Avatar kind="cory" status="online" statusLabel="Cory is online" />
```

`kind`: `cory` (dark navy tile), `cory-light` (light tile), `image`, `initials`. `size` in px, `ring` adds a separating outline. A photo that fails to load falls back to initials from `name`, so always pass `name`. `status` adds a presence dot (online / away / busy / offline).
