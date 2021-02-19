<template>
  <div class="contact-time">
    <div class="contact-time-work">
      <TextElement
        class=" text-primary"
        :text="`${workedDetect} now`"
      />
    </div>
    <div class="contact-time-clock">
      <Title
        class="ttl-1"
        :text="time.now.hour"
      />
      <Title
        class="contact-time-dots ttl-1"
        text=":"
      />
      <Title
        class="ttl-1"
        :text="time.now.minutes"
      />
    </div>
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import TextElement from '~/components/atoms/TextElement'

export default {
  components: {
    Title,
    TextElement
  },

  data () {
    return {
      time: {
        now: { hour: '', minutes: '' },
        start: '10',
        end: '19',
        worked: false
      }
    }
  },

  computed: {
    workedDetect () {
      if (
        this.time.now.hour >= this.time.start &&
          this.time.now.hour < this.time.end
      ) {
        return 'Working'
      } else {
        return 'Closed'
      }
    }
  },

  mounted () {
    this.getTime()
    setInterval(() => this.getTime(), 1000)
  },

  methods: {
    getTime () {
      const getTime = new Date()
      const hours = getTime.toLocaleString('en-US', {
        timeZone: 'Europe/Kiev',
        hour12: false,
        hour: '2-digit'
      })

      const minutes = getTime.toLocaleString('en-US', {
        timeZone: 'Europe/Kiev',
        minute: '2-digit'
      })

      this.time.now.hour = hours;
      (minutes >= 10) ? this.time.now.minutes = minutes : this.time.now.minutes = '0' + minutes
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-time {
  position: relative;

  @include tablet-small {
    margin-right: 22px;
    text-align: right;
    align-self: flex-end;
  }

  @include mobile {
    margin-right: 0;
  }
}

.contact-time-work {
  position: absolute;
  top: -27px;
  left: 0;
  padding-left: 14px;
  white-space: nowrap;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: $color-orange;
  }

  @include mobile {
    left: auto;
    right: 0;
    top: -23px;
  }
}

.contact-time-clock {
  display: flex;
}

.contact-time-dots {
  animation: pulse 1s linear infinite;
}

@keyframes pulse {

  0% {
    opacity: 1;
  }

  15% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>
