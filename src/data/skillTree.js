export const skillNodes = [
  { id: "root", label: "Core skills", x: 500, y: 400, branch: "root" },

  { id: "gamedev", label: "Game dev", x: 500, y: 280, branch: "gamedev", parent: "root" },
  { id: "unity", label: "Unity 3D", x: 380, y: 200, branch: "gamedev", parent: "gamedev" },
  { id: "unreal", label: "Unreal Engine 5", x: 500, y: 160, branch: "gamedev", parent: "gamedev" },
  { id: "cpp", label: "C++ / C#", x: 620, y: 200, branch: "gamedev", parent: "gamedev" },

  { id: "fullstack", label: "Full-stack web", x: 320, y: 460, branch: "fullstack", parent: "root" },
  { id: "vue", label: "Vue.js", x: 180, y: 420, branch: "fullstack", parent: "fullstack" },
  { id: "js", label: "JS & CSS", x: 180, y: 520, branch: "fullstack", parent: "fullstack" },

  { id: "security", label: "Systems & security", x: 680, y: 460, branch: "security", parent: "root" },
  { id: "mqtt", label: "MQTT & TCP/IP", x: 820, y: 400, branch: "security", parent: "security" },
  { id: "netsec", label: "Network security", x: 850, y: 480, branch: "security", parent: "security" },
  { id: "linux", label: "Linux & SQL", x: 800, y: 560, branch: "security", parent: "security" },
]

export const branchColors = {
  root: "#f5f5f7",
  gamedev: "#34c759",
  fullstack: "#7f77dd",
  security: "#ff9f0a",
}