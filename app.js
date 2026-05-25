const sysHandlerInstance = {
    version: "1.0.960",
    registry: [1859, 1998, 1590, 1338, 115, 1313, 1033, 1494],
    init: function() {
        const nodes = this.registry.filter(x => x > 333);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    sysHandlerInstance.init();
});