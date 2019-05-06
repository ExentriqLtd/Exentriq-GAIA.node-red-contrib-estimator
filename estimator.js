 module.exports = function(RED) {

    function Estimator(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        try {
                    } catch (e) {
	        node.error("ops, there was an error!", msg);
        }
    }
    	
    RED.nodes.registerType("estimator", Estimator);
}