Tabs, segmented control, or filter bar, one component, animated indicator.

```jsx
<Tabs label="Sections" items={[{value:'work',label:'Work'},{value:'about',label:'About'}]} defaultValue="work" />
<Tabs variant="segmented" items={[{value:'m',label:'Monthly'},{value:'y',label:'Yearly'}]} />
<Tabs variant="pills" items={[{value:'all',label:'All',count:12},{value:'ux',label:'UX'},{value:'soon',label:'Reports',disabled:true}]} onChange={setFilter} />
```

`underline` for section navigation (gradient indicator), `segmented` for 2–4 mutually exclusive views, `pills` for filters. Controlled via `value`/`onChange` or uncontrolled via `defaultValue`. Keyboard: Tab lands on the active tab, arrow keys move (mirrored in RTL), Home/End jump; `disabled` items are dimmed and skipped. Give the list a `label`.
