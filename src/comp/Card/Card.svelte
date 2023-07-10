<script lang="ts">
  import { theme } from 'src/lib/core/stores/theme';
  import { darkModeTheme, defaultTheme } from 'src/lib/styles/theme.css';
  import { container, content } from './Card.css';
    
  $: isDefaultTheme = $theme ==='default';
  $: contentStyle = `${content}  ${isDefaultTheme ? defaultTheme : darkModeTheme}`;
</script>
    
  <section class={container}>
    <div class={contentStyle}>
      <slot /> 
    </div>
  </section>