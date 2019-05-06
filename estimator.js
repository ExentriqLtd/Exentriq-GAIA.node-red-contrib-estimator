 module.exports = function(RED) {

    function Estimator(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        try {
            this.on('input', function(msg) {
        	
        		//layout preparation
    			var items = msg.payload.items;
        		
                var tmpLayouts = runPacker(items, itemsArtMap, node);
                
                msg.payload.layouts = tmpLayouts;
                
                node.send(msg);
            });
        } catch (e) {
	        node.error("ops, there was an error!", msg);
        }
    }
    	
    RED.nodes.registerType("estimator", Estimator);
}