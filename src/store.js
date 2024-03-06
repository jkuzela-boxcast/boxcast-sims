import { reactive } from "vue";

export const store = reactive({
  currentSim: "pro",
  changeSim(sim) {
    this.currentSim = sim;
  },
  getSim() {
    return this.currentSim;
  },
});
