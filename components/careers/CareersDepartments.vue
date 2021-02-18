<template>
  <div v-if="getDepartments && getCareersStat">
    <div
      v-for="(item, index) in getDepartments"
      :key="index"
      :class="['row col-br-top col-br-top-end',
               {
                 'col-br-double': index === getDepartments.length - 1
               }
      ]"
    >
      <div
        :class="['careers-department col-mob-10 col-tablet-7 off-tablet-3',
                 {
                   'off-tablet-s-2 col-tablet-s-8': index === 0,
                   'off-tablet-s-6 col-tablet-s-4': index === 1,
                   'off-tablet-s-4 col-tablet-s-6': index === 2
                 }
        ]"
      >
        <Title
          v-if="item.Name"
          class="ttl-1"
          :text="`${item.Name} (${getCount(item.Name).toString()})`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Title from '~/components/atoms/Title'

export default {
  components: {
    Title
  },

  computed: {
    ...mapGetters({
      getDepartments: 'Careers/getDepartments',
      getCareersStat: 'Careers/getCareersStat'
    })
  },

  methods: {
    getCount (name) {
      let counts = null
      counts = this.getCareersStat.filter(item => item.dep === name)[0]
      return counts ? counts.count : 0
    }
  }
}
</script>

<style lang="scss" scoped>

.careers-department {
  padding: 16px 0 7px;

  @include mobile {
    padding: 26px 0 18px;
  }
}
</style>
