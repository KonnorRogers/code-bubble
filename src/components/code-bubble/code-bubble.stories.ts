import type { Meta, StoryObj } from '@storybook/web-components';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';
import CodeBubble from './code-bubble';
import { html } from 'lit';

const { events, args, argTypes, template } = getWcStorybookHelpers(
  'code-bubble',
);

customElements.define('code-bubble', CodeBubble);


const meta: Meta<CodeBubble> = {
  title: 'Components/Code Block',
  component: 'code-bubble',
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

/**
 * create Story type that will provide autocomplete and docs for `args`,
 * but also allow for namespaced args like CSS Shadow Parts and Slots
 */
type Story = StoryObj<CodeBubble & typeof args>;

export const Default: Story = {
  render: args =>
    template(
      args,
      html`
        <pre><code class="language-html">&lt;button appearance=&quot;accent&quot;&gt;Accent&lt;/button&gt;
&lt;button appearance=&quot;neutral&quot;&gt;Neutral&lt;/button&gt;
&lt;button appearance=&quot;lightweight&quot;&gt;Lightweight&lt;/button&gt;
</code></pre>
        <pre><code class="language-jsx">export default () =&gt; {
  return (
    &lt;&gt;
      &lt;button appearance=&quot;accent&quot;&gt;Accent&lt;/button&gt;
      &lt;button appearance=&quot;neutral&quot;&gt;Neutral&lt;/button&gt;
      &lt;button appearance=&quot;lightweight&quot;&gt;Lightweight&lt;/button&gt;
    &lt;/&gt;
  );
};
</code></pre>
      `,
    ),
  args: {},
};