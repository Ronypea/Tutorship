<template>
  <div id="meetings-list">
    <div v-for="meeting in meetings"
         v-bind:key="meeting._id"
         v-bind:class="['meeting', { active: currentMeetingId === meeting.id}]"
         v-on:click="currentMeetingId=meeting.id">
      <v-card
        v-if="meeting.status === 'checked'"
        hover>
        <v-card-title style="background: floralwhite">
          <v-icon
            middle
            left
            color="green"
          >
            check_circle_outline
          </v-icon>
          <v-card-title primary-title>
            <div class="title">Ребёнок: {{ meeting.child }}</div>
          </v-card-title>
          <div class="grey--text" style="right: initial">{{ meeting.date }}</div>
        </v-card-title>
        <v-flex xs12 sm12 md12 lg12>
          <v-card-text v-show="currentMeetingId === meeting.id">
            <v-container fill-height fluid>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-text-field label="Длительность прогулки?" :value=meeting.duration></v-text-field>
                  <v-text-field label="Оцените настроение ребёнка до и после встречи:"
                                :value=meeting.child_mood></v-text-field>
                  <v-text-field label="Опишите своё настроение после встречи:"
                                :value=meeting.mentor_mood></v-text-field>
                </v-flex>
                <v-flex d-flex>
                  <v-textarea label="Чем планировали заниматься на встрече?" :value=meeting.plan_actions></v-textarea>
                  <v-textarea label="Чем в итоге занимались? " :value=meeting.real_actions></v-textarea>
                  <v-textarea label="Цель на следующую встречу? " :value=meeting.next_points></v-textarea>
                </v-flex>
                <v-flex d-flex>
                  <v-textarea label="Дополнительные комментарии:" :value=meeting.additional_comment></v-textarea>
                  <v-textarea label="Вопросы:" :value=meeting.answers></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-flex>
      </v-card>
      <v-card v-else-if="meeting.status === 'unchecked'">
        <v-card-title>
          <v-icon
            middle
            left
            color="grey"
          >
            check_circle_outline
          </v-icon>
          <v-card-title primary-title>
            <div class="title">Ребёнок: {{ meeting.child }}</div>
          </v-card-title>
          <div class="grey--text" style="right: initial">{{ meeting.date }}</div>
          <v-card-title>Планировалость сделать: {{ meeting.todo }}</v-card-title>
        </v-card-title>
        <v-flex xs12 sm12 md4 lg4>
          <v-card-text v-show="currentMeetingId === meeting.id">
            <v-list-tile-content>
              <v-text-field label="Длительность прогулки?" :value=meeting.duration></v-text-field>
              <v-text-field label="Оцените настроение ребёнка до и после встречи:"
                            :value=meeting.child_mood></v-text-field>
              <v-text-field label="Опишите своё настроение после встречи:" :value=meeting.mentor_mood></v-text-field>
              <v-textarea label="Чем планировали заниматься на встрече?" :value=meeting.plan_actions></v-textarea>
              <v-textarea label="Чем в итоге занимались? " :value=meeting.real_actions></v-textarea>
              <v-textarea label="Цель на следующую встречу? " :value=meeting.next_points></v-textarea>
              <v-textarea label="Дополнительные комментарии:" :value=meeting.additional_comment></v-textarea>
              <v-textarea label="Вопросы:" :value=meeting.answers></v-textarea>
            </v-list-tile-content>
          </v-card-text>
        </v-flex>
      </v-card>
      <v-card
        v-if="meeting.status === 'waiting'"
        hover>
        <v-card-title style="background: floralwhite">
          <v-icon
            middle
            left
            color="green"
          >
            check_circle_outline
          </v-icon>
          <v-card-title primary-title>
            <div class="title">Ребёнок: {{ meeting.child }}</div>
          </v-card-title>
          <div class="grey--text" style="right: initial">{{ meeting.date }}</div>
          <v-card-title>Планировалость сделать: {{ meeting.todo }}</v-card-title>
        </v-card-title>
        <v-flex xs12 sm12 md4 lg4>
          <v-card-text v-show="currentMeetingId === meeting.id">
            <v-list-tile-content>
              <v-text-field label="Длительность прогулки?"></v-text-field>
              <v-text-field label="Оцените настроение ребёнка до и после встречи:" v-model="report.child_mood"></v-text-field>
              <v-text-field label="Опишите своё настроение после встречи:" v-model="report.mentor_mood"></v-text-field>
              <v-textarea label="Чем планировали заниматься на встрече?" v-model="report.plan_actions"></v-textarea>
              <v-textarea label="Чем в итоге занимались? " v-model="report.real_actions"></v-textarea>
              <v-textarea label="Цель на следующую встречу? " v-model="report.next_points"></v-textarea>
              <v-textarea label="Дополнительные комментарии:" v-model="report.additional_comment"></v-textarea>
              <v-textarea label="Вопросы:" v-model="report.answers"></v-textarea>
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <v-btn class="success" flat @click="onSave()">Сохранить</v-btn>
          </v-card-text>
        </v-flex>
      </v-card>
      <v-card v-else-if="meeting.status === 'canceled'">
        <v-card-title>
          <v-icon
            middle
            left
            color="red"
          >
            highlight_off
          </v-icon>
          <v-card-title primary-title>
            <div class="title">Ребёнок: {{ meeting.child }}</div>
          </v-card-title>
          <div class="grey--text" style="right: initial">{{ meeting.date }}</div>
          <v-card-title primary-title style="color: darkred">
            <div class="title"> Встреча отменена!</div>
            <v-card-title>Планировалость сделать: {{ meeting.todo }}</v-card-title>
          </v-card-title>
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>import Service from '../../services/Service'

export default {
  name: 'MeetingsList',
  props: {meetings: Object},
  report: {
    duration: '',
    plan_actions: '',
    real_actions: '',
    child_mood: '',
    next_points: '',
    mentor_mood: '',
    additional_comment: '',
    answers: ''
  },

  data: function () {
    return {
      currentMeetingId: undefined
    }
  },
  methods: {
    async onSave() {
      await Service.createReport({
        duration: this.report.duration,
        plan_actions: this.report.plan_actions,
        real_actions: this.report.real_actions,
        child_mood: this.report.child_mood,
        next_points: this.report.next_points,
        mentor_mood: this.report.mentor_mood,
        additional_comment: this.report.additional_comment,
        answers: ''
      })
    }
  }
}
</script>

<style scoped>
  #point-list {
    margin: 0 15px;
  }

  #point-list .container.fluid {
    padding: 0;
  }

</style>
