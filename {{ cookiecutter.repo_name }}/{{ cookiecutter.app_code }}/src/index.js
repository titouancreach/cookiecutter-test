{%- macro camel_case(str) -%}
{{ str.title().replace("_", "") }}
{%- endmacro -%}

import Vue from 'vue';
import Vuetify from 'vuetify';

import './style/style.scss';

import Hello from '@/components/Hello.vue';

const {{ camel_case(cookiecutter.app_code) }} = {
  initUI(app) {
    Vue.use(Vuetify);
    this.vm = new Vue({
      render: h => h(Hello),
      components: {
        Hello
      }
    }).$mount('#{{ cookiecutter.app_code }}-mntpt')
  },

  exitUI(app) {
    this.vm.$destroy();
  }

};

export default {{ camel_case(cookiecutter.app_code) }};
