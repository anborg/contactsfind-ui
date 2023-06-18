<script setup lang="ts">
// const props = 
defineProps({
  fields: {
    type: Object,
    required: true,
  },
  filteredList: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="table-responsive">
    <table
      id="tableComponent"
      class="table table-hover table-striped table-sm caption-top"
      cellspacing="0"
    >
      <caption>
        List of contacts
      </caption>
      <thead class="table-light">
        <tr>
          <th v-for="field in fields" :key="field" class="table_title">
            {{ field }}
            <i class="bi bi-sort-alpha-down aria-label='Sort Icon'"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item">
          <td v-for="field in fields" :key="field">{{ item[field] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table_title:first-letter {
  text-transform: capitalize;
}
</style>
