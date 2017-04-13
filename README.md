# glamor-prefix-rules
## add prefix to every CSS rules from glamor

Because of the way CSS rules are working, you might want to prefix every CSS rules from glamor so that you can make sure they are having priority over less important CSS rules that you do not control.

## Usage

```sh
npm install -S glamor glamor-prefix-rules
```

```js
import glamor from 'glamor';
import prefixRules from 'glamor-prefix-rules';

glamor.plugins.add(prefixRules('#my-app'))

glamor.css({ display: 'block' });
```

**Output**
```css
#my-app .css-fisw11, #my-app [data-css-fisw11]{
  display:block;
}
```
