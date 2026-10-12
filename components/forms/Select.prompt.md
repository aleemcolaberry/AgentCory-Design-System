Dropdown for 5+ mutually exclusive options (institution type, role, time zone). Under 5 options, prefer `Tabs variant="segmented"` or `Chip`s.

```jsx
<Select label="Role" placeholder="Choose…" options={['Director of Admissions','VP Enrollment','Counselor']} />
<Select label="CRM" options={[{value:'slate',label:'Slate'},{value:'banner',label:'Banner'}]} defaultValue="slate" hint="We integrate natively" />
<Select label="Campus" loading options={[]} />
<Select label="Program" options={[]} emptyMessage="Add a program first" />
```

Native `<select>` under the hood, keyboard and mobile pickers work for free. `loading` disables with a spinner and "Loading…"; an empty `options` list disables with `emptyMessage` (say what unlocks it). `error` / `success` match Input.
