---
id: Content
section: components
cssPrefix: pf-v6-c-content
---## Examples

### Basic

```html
<h1 class="pf-v6-c-content--h1 pf-m-page-title">Hello world</h1>
<p
  class="pf-v6-c-content--p"
>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
<h2 class="pf-v6-c-content--h2">Second level</h2>
<p class="pf-v6-c-content--p">
  Curabitur accumsan turpis pharetra
  <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
</p>
<ul class="pf-v6-c-content--ul">
  <li
    class="pf-v6-c-content--li"
  >In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li
    class="pf-v6-c-content--li"
  >Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li class="pf-v6-c-content--li">
    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
    <ul class="pf-v6-c-content--ul">
      <li
        class="pf-v6-c-content--li"
      >In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li
        class="pf-v6-c-content--li"
      >Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li class="pf-v6-c-content--li">
        Ut venenatis, nisl scelerisque.
        <ol class="pf-v6-c-content--ol">
          <li class="pf-v6-c-content--li">Donec blandit a lorem id convallis.</li>
          <li
            class="pf-v6-c-content--li"
          >Cras gravida arcu at diam gravida gravida.</li>
          <li class="pf-v6-c-content--li">Integer in volutpat libero.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li class="pf-v6-c-content--li">Ut non enim metus.</li>
</ul>
<h3 class="pf-v6-c-content--h3">Third level</h3>
<p class="pf-v6-c-content--p">
  Quisque ante lacus, malesuada ac auctor vitae, congue
  <a class="pf-v6-c-content--a" href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
</p>
<ol class="pf-v6-c-content--ol">
  <li class="pf-v6-c-content--li">Donec blandit a lorem id convallis.</li>
  <li class="pf-v6-c-content--li">Cras gravida arcu at diam gravida gravida.</li>
  <li class="pf-v6-c-content--li">Integer in volutpat libero.</li>
  <li class="pf-v6-c-content--li">Donec a diam tellus.</li>
  <li class="pf-v6-c-content--li">
    Etiam auctor nisl et.
    <ul class="pf-v6-c-content--ul">
      <li class="pf-v6-c-content--li">Donec blandit a lorem id convallis.</li>
      <li class="pf-v6-c-content--li">Cras gravida arcu at diam gravida gravida.</li>
      <li class="pf-v6-c-content--li">
        Integer in volutpat libero.
        <ol class="pf-v6-c-content--ol">
          <li class="pf-v6-c-content--li">Donec blandit a lorem id convallis.</li>
          <li
            class="pf-v6-c-content--li"
          >Cras gravida arcu at diam gravida gravida.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li class="pf-v6-c-content--li">Aenean nec tortor orci.</li>
  <li
    class="pf-v6-c-content--li"
  >Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
  <li class="pf-v6-c-content--li">Vivamus maximus ultricies pulvinar.</li>
</ol>
<blockquote
  class="pf-v6-c-content--blockquote"
>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
<p class="pf-v6-c-content--p">
  Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et
  <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.
</p>
<hr class="pf-v6-c-content--hr" />
<h3 class="pf-v6-c-content--h3">Plain list example</h3>
<ol class="pf-v6-c-content--ol pf-m-plain">
  <li class="pf-v6-c-content--li">Donec blandit a lorem id convallis.</li>
  <li class="pf-v6-c-content--li">Cras gravida arcu at diam gravida gravida.</li>
  <li class="pf-v6-c-content--li">Integer in volutpat libero.</li>
  <li class="pf-v6-c-content--li">Donec a diam tellus.</li>
  <li class="pf-v6-c-content--li">
    Etiam auctor nisl et.
    <ul class="pf-v6-c-content--ul">
      <li class="pf-v6-c-content--li">Regular list</li>
      <li class="pf-v6-c-content--li">Donec blandit a lorem id convallis.</li>
      <li class="pf-v6-c-content--li">Cras gravida arcu at diam gravida gravida.</li>
      <li class="pf-v6-c-content--li">
        Integer in volutpat libero.
        <ol class="pf-v6-c-content--ol pf-m-plain">
          <li class="pf-v6-c-content--li">Nested plain list</li>
          <li class="pf-v6-c-content--li">Donec blandit a lorem id convallis.</li>
          <li
            class="pf-v6-c-content--li"
          >Cras gravida arcu at diam gravida gravida.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li class="pf-v6-c-content--li">Aenean nec tortor orci.</li>
  <li
    class="pf-v6-c-content--li"
  >Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
  <li class="pf-v6-c-content--li">Vivamus maximus ultricies pulvinar.</li>
</ol>
<hr class="pf-v6-c-content--hr" />
<h3 class="pf-v6-c-content--h3">Visited link example</h3>
<p class="pf-v6-c-content--p">
  <a class="pf-v6-c-content--a pf-m-plain" href>Visited link</a>
</p>
<hr class="pf-v6-c-content--hr" />
<p class="pf-v6-c-content--p">
  Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum
  commodo.
</p>
<dl class="pf-v6-c-content--dl">
  <dt class="pf-v6-c-content--dt">Web</dt>
  <dd
    class="pf-v6-c-content--dd"
  >The part of the internet that contains websites and web pages</dd>
  <dt class="pf-v6-c-content--dt">HTML</dt>
  <dd class="pf-v6-c-content--dd">A markup language for creating web pages</dd>
  <dt class="pf-v6-c-content--dt">CSS</dt>
  <dd class="pf-v6-c-content--dd">A technology to make HTML look better</dd>
</dl>
<p class="pf-v6-c-content--p">
  Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.
  Nulla facilisi. Nullam ac erat ante.
</p>
<h4 class="pf-v6-c-content--h4">Fourth level</h4>
<p class="pf-v6-c-content--p">
  Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum
  ex efficitur.
</p>
<p class="pf-v6-c-content--p">
  Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris
  eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.
</p>
<small
  class="pf-v6-c-content--small"
>Sometimes you need small text to display things like date created</small>
<p class="pf-v6-c-content--p">
  Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis
  lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,
  mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex
  sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.
  Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.
</p>
<h5 class="pf-v6-c-content--h5">Fifth level</h5>
<p class="pf-v6-c-content--p">
  Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet
  ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend
  justo. Nam et sollicitudin odio.
</p>
<h6 class="pf-v6-c-content--h6">Sixth level</h6>
<p class="pf-v6-c-content--p">
  Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.
  Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis.
  Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui,
  sed varius sapien odio vitae est. Etiam at cursus metus.
</p>

```

### Plain HTML in content wrapper

```html
<div class="pf-v6-c-content">
  <h1 class="pf-m-page-title">Hello world</h1>
  <p
    class
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra
    <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>
      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>
          Ut venenatis, nisl scelerisque.
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in volutpat libero.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>Ut non enim metus.</li>
  </ul>
  <h3>Third level</h3>
  <p>
    Quisque ante lacus, malesuada ac auctor vitae, congue
    <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
  </p>
  <ol>
    <li>Donec blandit a lorem id convallis.</li>
    <li>Cras gravida arcu at diam gravida gravida.</li>
    <li>Integer in volutpat libero.</li>
    <li>Donec a diam tellus.</li>
    <li>
      Etiam auctor nisl et.
      <ul>
        <li>Donec blandit a lorem id convallis.</li>
        <li>Cras gravida arcu at diam gravida gravida.</li>
        <li>
          Integer in volutpat libero.
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>Aenean nec tortor orci.</li>
    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
    <li>Vivamus maximus ultricies pulvinar.</li>
  </ol>
  <blockquote
    class
  >Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
  <p>
    Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et
    <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.
  </p>
  <hr />
  <h3>Plain list example</h3>
  <ol class="pf-m-plain">
    <li>Donec blandit a lorem id convallis.</li>
    <li>Cras gravida arcu at diam gravida gravida.</li>
    <li>Integer in volutpat libero.</li>
    <li>Donec a diam tellus.</li>
    <li>
      Etiam auctor nisl et.
      <ul>
        <li>Regular list</li>
        <li>Donec blandit a lorem id convallis.</li>
        <li>Cras gravida arcu at diam gravida gravida.</li>
        <li>
          Integer in volutpat libero.
          <ol class="pf-m-plain">
            <li>Nested plain list</li>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>Aenean nec tortor orci.</li>
    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
    <li>Vivamus maximus ultricies pulvinar.</li>
  </ol>
  <hr />
  <h3>Visited link example</h3>
  <p>
    <a class="pf-m-plain" href>Visited link</a>
  </p>
  <hr />
  <p>
    Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum
    commodo.
  </p>
  <dl>
    <dt>Web</dt>
    <dd>The part of the internet that contains websites and web pages</dd>
    <dt>HTML</dt>
    <dd>A markup language for creating web pages</dd>
    <dt>CSS</dt>
    <dd>A technology to make HTML look better</dd>
  </dl>
  <p>
    Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.
    Nulla facilisi. Nullam ac erat ante.
  </p>
  <h4>Fourth level</h4>
  <p>
    Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum
    ex efficitur.
  </p>
  <p>
    Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris
    eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.
  </p>
  <small>Sometimes you need small text to display things like date created</small>
  <p>
    Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis
    lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,
    mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex
    sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.
    Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.
  </p>
  <h5>Fifth level</h5>
  <p>
    Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet
    ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend
    justo. Nam et sollicitudin odio.
  </p>
  <h6>Sixth level</h6>
  <p>
    Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.
    Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis.
    Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui,
    sed varius sapien odio vitae est. Etiam at cursus metus.
  </p>
</div>

```

### Long-form/editorial content

```html
<h1 class="pf-v6-c-content--h1 pf-m-page-title pf-m-editorial">Hello world</h1>
<p
  class="pf-v6-c-content--p pf-m-editorial"
>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
<h2 class="pf-v6-c-content--h2 pf-m-editorial">Second level</h2>
<p class="pf-v6-c-content--p pf-m-editorial">
  Curabitur accumsan turpis pharetra
  <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
</p>
<ul class="pf-v6-c-content--ul pf-m-editorial">
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li class="pf-v6-c-content--li pf-m-editorial">
    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
    <ul class="pf-v6-c-content--ul pf-m-editorial">
      <li
        class="pf-v6-c-content--li pf-m-editorial"
      >In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li
        class="pf-v6-c-content--li pf-m-editorial"
      >Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li class="pf-v6-c-content--li pf-m-editorial">
        Ut venenatis, nisl scelerisque.
        <ol class="pf-v6-c-content--ol pf-m-editorial">
          <li
            class="pf-v6-c-content--li pf-m-editorial"
          >Donec blandit a lorem id convallis.</li>
          <li
            class="pf-v6-c-content--li pf-m-editorial"
          >Cras gravida arcu at diam gravida gravida.</li>
          <li
            class="pf-v6-c-content--li pf-m-editorial"
          >Integer in volutpat libero.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li class="pf-v6-c-content--li pf-m-editorial">Ut non enim metus.</li>
</ul>
<h3 class="pf-v6-c-content--h3 pf-m-editorial">Third level</h3>
<p class="pf-v6-c-content--p pf-m-editorial">
  Quisque ante lacus, malesuada ac auctor vitae, congue
  <a class="pf-v6-c-content--a pf-m-editorial" href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
</p>
<ol class="pf-v6-c-content--ol pf-m-editorial">
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Donec blandit a lorem id convallis.</li>
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Cras gravida arcu at diam gravida gravida.</li>
  <li class="pf-v6-c-content--li pf-m-editorial">Integer in volutpat libero.</li>
  <li class="pf-v6-c-content--li pf-m-editorial">Donec a diam tellus.</li>
  <li class="pf-v6-c-content--li pf-m-editorial">
    Etiam auctor nisl et.
    <ul class="pf-v6-c-content--ul pf-m-editorial">
      <li
        class="pf-v6-c-content--li pf-m-editorial"
      >Donec blandit a lorem id convallis.</li>
      <li
        class="pf-v6-c-content--li pf-m-editorial"
      >Cras gravida arcu at diam gravida gravida.</li>
      <li class="pf-v6-c-content--li pf-m-editorial">
        Integer in volutpat libero.
        <ol class="pf-v6-c-content--ol pf-m-editorial">
          <li
            class="pf-v6-c-content--li pf-m-editorial"
          >Donec blandit a lorem id convallis.</li>
          <li
            class="pf-v6-c-content--li pf-m-editorial"
          >Cras gravida arcu at diam gravida gravida.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li class="pf-v6-c-content--li pf-m-editorial">Aenean nec tortor orci.</li>
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Vivamus maximus ultricies pulvinar.</li>
</ol>
<blockquote
  class="pf-v6-c-content--blockquote pf-m-editorial"
>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
<p class="pf-v6-c-content--p pf-m-editorial">
  Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et
  <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.
</p>
<hr class="pf-v6-c-content--hr pf-m-editorial" />
<h3 class="pf-v6-c-content--h3 pf-m-editorial">Plain list example</h3>
<ol class="pf-v6-c-content--ol pf-m-plain pf-m-editorial">
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Donec blandit a lorem id convallis.</li>
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Cras gravida arcu at diam gravida gravida.</li>
  <li class="pf-v6-c-content--li pf-m-editorial">Integer in volutpat libero.</li>
  <li class="pf-v6-c-content--li pf-m-editorial">Donec a diam tellus.</li>
  <li class="pf-v6-c-content--li pf-m-editorial">
    Etiam auctor nisl et.
    <ul class="pf-v6-c-content--ul pf-m-editorial">
      <li class="pf-v6-c-content--li pf-m-editorial">Regular list</li>
      <li
        class="pf-v6-c-content--li pf-m-editorial"
      >Donec blandit a lorem id convallis.</li>
      <li
        class="pf-v6-c-content--li pf-m-editorial"
      >Cras gravida arcu at diam gravida gravida.</li>
      <li class="pf-v6-c-content--li pf-m-editorial">
        Integer in volutpat libero.
        <ol class="pf-v6-c-content--ol pf-m-plain pf-m-editorial">
          <li class="pf-v6-c-content--li pf-m-editorial">Nested plain list</li>
          <li
            class="pf-v6-c-content--li pf-m-editorial"
          >Donec blandit a lorem id convallis.</li>
          <li
            class="pf-v6-c-content--li pf-m-editorial"
          >Cras gravida arcu at diam gravida gravida.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li class="pf-v6-c-content--li pf-m-editorial">Aenean nec tortor orci.</li>
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
  <li
    class="pf-v6-c-content--li pf-m-editorial"
  >Vivamus maximus ultricies pulvinar.</li>
</ol>
<hr class="pf-v6-c-content--hr pf-m-editorial" />
<h3 class="pf-v6-c-content--h3 pf-m-editorial">Visited link example</h3>
<p class="pf-v6-c-content--p pf-m-editorial">
  <a class="pf-v6-c-content--a pf-m-plain pf-m-editorial" href>Visited link</a>
</p>
<hr class="pf-v6-c-content--hr pf-m-editorial" />
<p class="pf-v6-c-content--p pf-m-editorial">
  Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum
  commodo.
</p>
<dl class="pf-v6-c-content--dl pf-m-editorial">
  <dt class="pf-v6-c-content--dt pf-m-editorial">Web</dt>
  <dd
    class="pf-v6-c-content--dd pf-m-editorial"
  >The part of the internet that contains websites and web pages</dd>
  <dt class="pf-v6-c-content--dt pf-m-editorial">HTML</dt>
  <dd
    class="pf-v6-c-content--dd pf-m-editorial"
  >A markup language for creating web pages</dd>
  <dt class="pf-v6-c-content--dt pf-m-editorial">CSS</dt>
  <dd
    class="pf-v6-c-content--dd pf-m-editorial"
  >A technology to make HTML look better</dd>
</dl>
<p class="pf-v6-c-content--p pf-m-editorial">
  Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.
  Nulla facilisi. Nullam ac erat ante.
</p>
<h4 class="pf-v6-c-content--h4 pf-m-editorial">Fourth level</h4>
<p class="pf-v6-c-content--p pf-m-editorial">
  Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum
  ex efficitur.
</p>
<p class="pf-v6-c-content--p pf-m-editorial">
  Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris
  eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.
</p>
<small
  class="pf-v6-c-content--small pf-m-editorial"
>Sometimes you need small text to display things like date created</small>
<p class="pf-v6-c-content--p pf-m-editorial">
  Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis
  lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,
  mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex
  sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.
  Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.
</p>
<h5 class="pf-v6-c-content--h5 pf-m-editorial">Fifth level</h5>
<p class="pf-v6-c-content--p pf-m-editorial">
  Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet
  ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend
  justo. Nam et sollicitudin odio.
</p>
<h6 class="pf-v6-c-content--h6 pf-m-editorial">Sixth level</h6>
<p class="pf-v6-c-content--p pf-m-editorial">
  Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.
  Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis.
  Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui,
  sed varius sapien odio vitae est. Etiam at cursus metus.
</p>

```

### Long-form/editorial content in content wrapper

```html
<div class="pf-v6-c-content pf-m-editorial">
  <h1 class="pf-m-page-title">Hello world</h1>
  <p
    class
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra
    <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>
      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>
          Ut venenatis, nisl scelerisque.
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in volutpat libero.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>Ut non enim metus.</li>
  </ul>
  <h3>Third level</h3>
  <p>
    Quisque ante lacus, malesuada ac auctor vitae, congue
    <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
  </p>
  <ol>
    <li>Donec blandit a lorem id convallis.</li>
    <li>Cras gravida arcu at diam gravida gravida.</li>
    <li>Integer in volutpat libero.</li>
    <li>Donec a diam tellus.</li>
    <li>
      Etiam auctor nisl et.
      <ul>
        <li>Donec blandit a lorem id convallis.</li>
        <li>Cras gravida arcu at diam gravida gravida.</li>
        <li>
          Integer in volutpat libero.
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>Aenean nec tortor orci.</li>
    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
    <li>Vivamus maximus ultricies pulvinar.</li>
  </ol>
  <blockquote
    class
  >Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
  <p>
    Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et
    <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.
  </p>
  <hr />
  <h3>Plain list example</h3>
  <ol class="pf-m-plain">
    <li>Donec blandit a lorem id convallis.</li>
    <li>Cras gravida arcu at diam gravida gravida.</li>
    <li>Integer in volutpat libero.</li>
    <li>Donec a diam tellus.</li>
    <li>
      Etiam auctor nisl et.
      <ul>
        <li>Regular list</li>
        <li>Donec blandit a lorem id convallis.</li>
        <li>Cras gravida arcu at diam gravida gravida.</li>
        <li>
          Integer in volutpat libero.
          <ol class="pf-m-plain">
            <li>Nested plain list</li>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>Aenean nec tortor orci.</li>
    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
    <li>Vivamus maximus ultricies pulvinar.</li>
  </ol>
  <hr />
  <h3>Visited link example</h3>
  <p>
    <a class="pf-m-plain" href>Visited link</a>
  </p>
  <hr />
  <p>
    Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum
    commodo.
  </p>
  <dl>
    <dt>Web</dt>
    <dd>The part of the internet that contains websites and web pages</dd>
    <dt>HTML</dt>
    <dd>A markup language for creating web pages</dd>
    <dt>CSS</dt>
    <dd>A technology to make HTML look better</dd>
  </dl>
  <p>
    Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.
    Nulla facilisi. Nullam ac erat ante.
  </p>
  <h4>Fourth level</h4>
  <p>
    Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum
    ex efficitur.
  </p>
  <p>
    Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris
    eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.
  </p>
  <small>Sometimes you need small text to display things like date created</small>
  <p>
    Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis
    lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,
    mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex
    sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.
    Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.
  </p>
  <h5>Fifth level</h5>
  <p>
    Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet
    ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend
    justo. Nam et sollicitudin odio.
  </p>
  <h6>Sixth level</h6>
  <p>
    Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.
    Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis.
    Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui,
    sed varius sapien odio vitae est. Etiam at cursus metus.
  </p>
</div>

```

## Documentation

### Overview

When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use `pf-v6-c-content` as container. It can handle almost any HTML tag:

* `<p>` paragraphs
* `<ul>` `<ol>` `<dl>` lists
* `<h1>` to `<h6>` headings
* `<blockquote>` quotes
* `<em>` and `<strong>`

This `pf-v6-c-content` class can be used in any context where you just want to (or can only) write some text.

This component is an exception to the variable system since we style type selectors.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-content` | `<div>`, `<section>`, or `<article>` | Generates vertical rhythm and typographic treatment to html elements. |
| `.pf-m-visited` | `.pf-v6-c-content`, `<a>` | Modifies all links in a content block to include visited styles. Can also be applied to a single link in a content block. |
| `.pf-m-plain` | `<ul>`, `<ol>` | Removes the list marker and indentation. |
| `.pf-m-editorial` | `.pf-v6-c-content*` | Applies long-form, editorial content styles to a block of content or individual content elements. |
| `.pf-m-page-title` | `.pf-v6-c-content--[h1, h2, h3, h4, h5, h6]`, `.pf-v6-c-content [h1, h2, h3, h4, h5, h6]` | Applies page title styles. **Note:** `.pf-m-page-title` should only apply to the heading that serves as the title for the current page. |
