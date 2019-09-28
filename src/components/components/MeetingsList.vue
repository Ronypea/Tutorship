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
            <v-list-tile-content>
              <v-text-field label="Длительность прогулки?" :value=meeting.duration></v-text-field>
              <v-textarea label="Чем планировали заниматься на встрече?" :value=meeting.plan_actions></v-textarea>
              <v-textarea label="Чем в итоге занимались? " :value=meeting.real_actions></v-textarea>
              <v-text-field label="Оцените настроение ребёнка до и после встречи:"
                            :value=meeting.child_mood></v-text-field>
              <v-textarea label="Цель на следующую встречу? " :value=meeting.next_points></v-textarea>
              <v-text-field label="Опишите своё настроение после встречи:" :value=meeting.mentor_mood></v-text-field>
              <v-textarea label="Дополнительные комментарии:" :value=meeting.additional_comment></v-textarea>
              <v-textarea label="Вопросы:" :value=meeting.answers></v-textarea>
            </v-list-tile-content>
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
        <v-flex xs12 sm12 md12 lg12>
          <v-card-text v-show="currentMeetingId === meeting.id">
            <v-list-tile-content>
              <v-text-field label="Длительность прогулки?" :value=meeting.duration></v-text-field>
              <v-textarea label="Чем планировали заниматься на встрече?" :value=meeting.plan_actions></v-textarea>
              <v-textarea label="Чем в итоге занимались? " :value=meeting.real_actions></v-textarea>
              <v-text-field label="Оцените настроение ребёнка до и после встречи:"
                            :value=meeting.child_mood></v-text-field>
              <v-textarea label="Цель на следующую встречу? " :value=meeting.next_points></v-textarea>
              <v-text-field label="Опишите своё настроение после встречи:" :value=meeting.mentor_mood></v-text-field>
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
        <v-flex xs12 sm12 md12 lg12>
          <v-card-text v-show="currentMeetingId === meeting.id">
            <v-list-tile-content>
              <v-text-field label="Длительность прогулки?"></v-text-field>
              <v-textarea label="Чем планировали заниматься на встрече?"></v-textarea>
              <v-textarea label="Чем в итоге занимались? "></v-textarea>
              <v-text-field label="Оцените настроение ребёнка до и после встречи:"></v-text-field>
              <v-textarea label="Цель на следующую встречу? "></v-textarea>
              <v-text-field label="Опишите своё настроение после встречи:"></v-text-field>
              <v-textarea label="Дополнительные комментарии:"></v-textarea>
              <v-textarea label="Вопросы:"></v-textarea>
            </v-list-tile-content>
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
            <div class="title"> Встреча отменена! </div>
            <v-card-title>Планировалость сделать: {{ meeting.todo }}</v-card-title>
          </v-card-title>
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>export default {
  name: 'MeetingsList',
  props: {meetings: Object},

  data: function () {
    return {
      currentMeetingId: undefined
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
