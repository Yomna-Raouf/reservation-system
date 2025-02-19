<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue';

defineProps({
  branchId: {
    type: String,
  },
});

const slotsInitValue = [new Date(), new Date()];

const form = reactive({
  tables: [],
  duration: 0,
  Saturday: slotsInitValue,
  Sunday: slotsInitValue,
  Monday: slotsInitValue,
  Tuesday: slotsInitValue,
  Wednesday: slotsInitValue,
  Thursday: slotsInitValue,
  Friday: slotsInitValue,
});
const weekDays: (keyof typeof form)[] = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];

const tables = ref([
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
]);
</script>

<template>
  <div>
    <el-alert title="Branch working hours are 00:00 to 00:00 " type="info" show-icon> </el-alert>
    <el-form label-position="top" label-width="500px">
      <el-form-item label="Reservation Duration(minutes)" required>
        <el-input v-model="form.duration"></el-input>
      </el-form-item>

      <el-form-item label="Tables" size="medium">
        <el-select
          multiple
          v-model="form.tables"
          placeholder="Please select a branch"
          size="large"
          style="width: 100%"
        >
          <el-option
            v-for="table in tables"
            :key="table.value"
            :label="table.label"
            :value="table.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <div class="FEditBranchForm_daySlot">
        <div>
          <el-form-item v-for="day in weekDays" :key="day" :label="day">
            <el-time-picker
              is-range
              v-model="form[day]"
              range-separator="-"
              start-placeholder="Start time"
              end-placeholder="End time"
              arrow-control
              style="width: 100%"
            >
            </el-time-picker>
          </el-form-item>
        </div>
        <el-button type="text">Apply on All days</el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
.FEditBranchForm_daySlot {
  position: relative;
}

button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
