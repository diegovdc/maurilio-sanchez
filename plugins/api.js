import Vue from 'vue'
import * as R from 'ramda'
Vue.mixin({
  methods: {
    titulo: R.path(['attributes', 'titulo']),
    slug: R.path(['attributes', 'slug']),
  }
})