(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("ACZChQgbgLAAgSIACgKIAMgTQALgOAAhPQAAgtgGgSQgIgVgXAAQgKAAgJAHQgJAHgCALQgEAMAAA0IAEBFQACAMAPAWIADANQAAAohoAAQhAAAgWgJQgSgIAAgTIACgMIAPgPIAKgOIADgXIADhKQAAhDgiAAQgZAAgFAdQgEAbgBAxIACAxQACALAGANQAJAOgBAJQAAAWgeAJQghAJgpAAQg1AAgYgIQgYgJAAgSIADgLIAPgPQAPgOACgYIAEhXQAAgggDgMQgDgNgLgIIgNgMIgDgLQAAgXAkgNQBWgfAqAAQAUAAAAAbIAAAGIgBAJQAAASAMAAQAFAAANgOQASgWAcgMQAbgMAeAAQA3AAAWApQAIAPAGAAQADAAAOgNQAtgrA3AAQAtAAAbAYQAdAZABAyIgBAlIgBA0IAAAoIgBAKQAAAWAOAQIAKANIACAJQAAArhmAAQguAAgbgKg");
	this.shape.setTransform(229.7,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhyCEQgYgUgPgdQgUgmAAgqQAAg5AigtQAegnAvgUQAigPAnAAQBBAAAtAlQAXASAOAaQAQAcAAAbQAAAXgKANQgJAOgOAAIieAAQgLAAAAAJQAAAVAYAUQAWAUAcgBQARAAAUgFQATgHANgJQALgIAIAAQAIAAAIAKQAJALAAAMQAAAYgeAXQg3AphGAAQhGAAgwgqgAgVhhQgKAOAAAPQAAAKAGAEQAEAEAMAAIAhAAQAWAAAAgUQAAgTgKgLQgLgLgRAAQgSgBgLAPg");
	this.shape_1.setTransform(178,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AhBC4QghgfAAgyIAAicQAAgFgCgEQgFgCgFAAIgjAAQgKAAgCgEQgDgDAAgMIAAgPQAAgKAIgFICahhIAOgDIAcAAQAIAAADAEQADADAAAMIAAAuQAAAKAEADQADADAKAAIA/AAQAMAAAEAFQAEAEAAAPIAAAUQAAAQgFAHQgFAGgMAAIg+AAQgJAAgDADQgEAEAAAJIAAByQAAAUAKANQAKANAQAAQANAAAWgMIAKgDQAIAAAHAKQAHAJAAAMQAAAVgXATQgxAphEAAQg1AAghgeg");
	this.shape_2.setTransform(143.3,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgZCpIglgDIgKABIgPABQgQAAgJgIQgOgNgMgaQgMgcAAgTQAAgfAZgBQAJABAJAGIAgAhIAYAVQAJAGAKgBQAMABAGgGQAHgGAAgKQAAgQgagMQg3gbgYgcQgYgcAAglQAAgoAYgdQAkgqA9gBQAQABAmAHIAOABIAVgGIAOgDQAQABAPATQAOAQAHATQAJATgBAOQAAANgJAKQgJAIgOAAQgMABgKgGIgegZQgVgWgPAAQgJABgHAGQgHAIAAAJQAAARAgAOQA5AaAfAeQAZAZAAAmQAAAugpAgQgkAcgzAAg");
	this.shape_3.setTransform(110.9,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AhzCEQgWgUgQgdQgUgmAAgqQAAg5AjgtQAegnAtgUQAjgPAnAAQBBAAAtAlQAXASAOAaQAQAcAAAbQAAAXgKANQgIAOgPAAIifAAQgKAAAAAJQAAAVAYAUQAXAUAbgBQARAAATgFQAUgHANgJQALgIAHAAQAJAAAJAKQAIALAAAMQAAAYgfAXQg2AphGAAQhGAAgxgqgAgUhhQgLAOAAAPQAAAKAFAEQAFAEAMAAIAiAAQAVAAAAgUQAAgTgLgLQgKgLgRAAQgSgBgKAPg");
	this.shape_4.setTransform(76.2,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgtDjQgdgJghgVIgIgEIgVAHIgVADQgVAAAAgNIACgKQAGgWADghIAChoIAAhcQAAgjgDgJQgCgJgNgFQgSgHgGgHQgHgHAAgMQAAgWAwgWQAbgMAogIQAngJAcAAQASAAAAAVIgFCEIAAAHQAAAHAFAAIANgKQAnggAwAAQAvAAAlAiQAtAsAABEQAABihKA7Qg0ArhIAAQgiAAgcgJgAgMAEQgGAJAAAeQAABPAFAcQAFAaAXAAQAZAAANgWQANgVAAgoQAAg6gWgbQgMgPgSgBQgRAAgJAMg");
	this.shape_5.setTransform(35.1,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AiSDeQgVgLgNgSQgNgRAAgTQAAgNAIgMQAGgLAMgEQAKgFAAgEQAAgEgIgHQgbgXAAgZQgBgQANgRQAOgQATgKQAIgEAAgEQAAgFgKgJQgjghAAgqQAAgXAMgVQANgUAWgPQA2gkBDAAQAaAAAgAHIArAGQAkAAAlgdIAMgGQAJAAAHAKQAGAJAAANQAAAOgIASQgKARgMALQgHAHgBAEIACAIIABAMQAAApgcAcQgZAYglAOQgnANguAAIgVgCIgOgBQgSABAAAQQAAAMAMAHQAMAGATAAIAogDQA3gIAbAAQAoAAAWANQARAKALASQAKATAAAVQAAAigZAgQgeAng6ASQgtAOg7AAQhLAAgwgXgAhfCQQAAATAVANQAXANAiAAQAggBATgIQATgJAAgQQAAgIgIgHQgGgFgLAAIgPABIgqADIghgCIgUgCIgEgBQgJAAAAAKgAgoihQgLANABAVQgBAlAMAWQALAWASAAQARAAALgNQALgOgBgXQAAglgLgUQgLgUgSgBQgRAAgLANg");
	this.shape_6.setTransform(-6,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AiUB/QgxgtAAhHQAAhPA8gzQA+g2BZAAQA+AAAvAhQAhAWAUAlQAWAnAAAqQAABJhEAzQhAAyhTAAQhRAAgygvgAgkhTQgJAKAAATQAAAVAHAhQAIAkAKAaQALAcAXAAQAeAAAAgmQAAgdgIgiQgHglgLgXQgLgWgTgBQgPAAgJALg");
	this.shape_7.setTransform(-47.2,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("ACZChQgbgLgBgSIACgKIAOgTQAKgOAAhPQAAgtgHgSQgHgVgWAAQgLAAgJAHQgJAHgDALQgDAMAAA0IADBFQADAMAOAWIAEANQAAAohoAAQhAAAgWgJQgRgIgBgTIADgMIAOgPIAKgOIAEgXIAChKQAAhDgiAAQgZAAgFAdQgFAbAAAxIADAxQABALAHANQAHAOAAAJQAAAWgeAJQgiAJgoAAQg1AAgYgIQgYgJAAgSIADgLIAPgPQAPgOADgYIADhXQAAgggDgMQgEgNgKgIIgMgMIgEgLQAAgXAkgNQBVgfAsAAQATAAAAAbIAAAGIAAAJQAAASALAAQAFAAANgOQARgWAcgMQAcgMAdAAQA4AAAWApQAIAPAGAAQADAAAPgNQAsgrA4AAQAsAAAcAYQAdAZAAAyIgBAlIgBA0IAAAoIAAAKQAAAWANAQIAKANIACAJQAAArhmAAQguAAgbgKg");
	this.shape_8.setTransform(-101.6,7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AhzCEQgWgUgQgdQgUgmAAgqQAAg5AjgtQAegnAtgUQAjgPAnAAQBBAAAtAlQAXASAOAaQAQAcAAAbQAAAXgKANQgIAOgPAAIifAAQgKAAAAAJQAAAVAYAUQAXAUAbgBQARAAATgFQAUgHANgJQALgIAIAAQAIAAAJAKQAIALAAAMQAAAYgfAXQg2AphGAAQhGAAgxgqgAgUhhQgLAOAAAPQAAAKAFAEQAFAEAMAAIAiAAQAVAAAAgUQAAgTgLgLQgKgLgRAAQgSgBgKAPg");
	this.shape_9.setTransform(-153.4,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AhBC4QghgfAAgyIAAicQAAgFgCgEQgFgCgFAAIgjAAQgKAAgCgEQgDgDAAgMIAAgPQAAgKAIgFICahhIAOgDIAcAAQAIAAADAEQADADAAAMIAAAuQAAAKAEADQADADAKAAIA/AAQAMAAAEAFQAEAEAAAPIAAAUQAAAQgFAHQgFAGgMAAIg+AAQgJAAgDADQgEAEAAAJIAAByQAAAUAKANQAKANAQAAQANAAAWgMIAKgDQAIAAAHAKQAHAJAAAMQAAAVgXATQgxAphEAAQg1AAghgeg");
	this.shape_10.setTransform(-188,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AgZCpIglgDIgLABIgOABQgQAAgJgIQgOgNgMgaQgMgcABgTQgBgfAZgBQAKABAIAGIAgAhIAYAVQAJAGAKgBQALABAHgGQAHgGAAgKQAAgQgagMQg3gbgYgcQgYgcAAglQAAgoAYgdQAkgqA9gBQAQABAmAHIANABIAXgGIANgDQAQABAQATQANAQAHATQAJATgBAOQAAANgJAKQgKAIgOAAQgLABgKgGIgegZQgVgWgPAAQgJABgHAGQgHAIAAAJQAAARAgAOQA5AaAeAeQAaAZAAAmQAAAugpAgQgkAcgzAAg");
	this.shape_11.setTransform(-220.4,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AgFDQIABgKIAKhDIADgVIABgGQAAgMgNgBIgUAAQgPABgBAOIgBAHIgFA4QAAATgKAHQgIAHgYAJQgZAKgIAAQgLAAAAgNIACgKIALhDIADgPIABgOQAAgKgRgBIgZACIgHAAQgPABAAgLIAKgYIARgdQALgOAPAAIAJABIAGAAQAIAAACgNIADgSIAAgFQAAgJgLAAIgfABIgIABQgOAAAAgKIAKgZIARgdQALgOAOAAIAKACIAGAAQAIAAACgNIACgNIACgvQABgPAJgHIAggOQAXgJAJABQAKgBAAALIgCALIgEAhIgHAxIgBAIQAAAJAOAAIASAAQAKAAADgDQAEgEABgKIACgMIADguQAAgQAJgHQAKgGAXgIQAWgJAJABIAIADIAEAHIgDALIgFAhIgHAxIgBAIQAAAJAMAAIAfgBIAKgBQALAAAAALQAAAHgRAgQgOAbgPAAIgPgCIgHgBQgHAAgCANIgCAPIgBAJQAAAKATAAIAYgBIAJgBQALAAAAAKIgIAZIgRAcQgKAPgLAAIgPgCIgGgBQgIAAgCANQgFAfgBAgQAAATgKAHQgIAHgYAJQgZAKgIAAQgJAAAAgNgAgSgaIgEAMIgDASIAAAHQAAAJAMAAIAVAAIAMgCIAEgMIADgSIABgIQAAgIgNAAIgVAAg");
	this.shape_12.setTransform(-257.7,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-44.2,565.8,88.5);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("ACZChQgbgLgBgSIACgKIAOgTQAKgOAAhPQAAgtgHgSQgHgVgWAAQgLAAgJAHQgJAHgDALQgDAMAAA0IADBFQADAMAOAWIAEANQAAAohoAAQhAAAgWgJQgRgIAAgTIACgMIAOgPIALgOIADgXIAChKQAAhDgiAAQgaAAgEAdQgFAbABAxIACAxQABALAHANQAHAOABAJQAAAWgfAJQgiAJgoAAQg0AAgZgIQgYgJAAgSIADgLIAPgPQAPgOADgYIADhXQAAgggDgMQgEgNgKgIIgMgMIgEgLQAAgXAkgNQBVgfAsAAQATAAAAAbIAAAGIAAAJQgBASALAAQAGAAAMgOQASgWAcgMQAcgMAdAAQA4AAAWApQAIAPAGAAQADAAAPgNQAsgrA4AAQAsAAAcAYQAcAZABAyIgBAlIgBA0IAAAoIAAAKQAAAWANAQIAKANIACAJQAAArhmAAQguAAgbgKg");
	this.shape.setTransform(229.7,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhzCEQgWgUgQgdQgUgmAAgqQAAg5AjgtQAegnAtgUQAjgPAnAAQBBAAAtAlQAXASAOAaQAQAcAAAbQAAAXgKANQgIAOgPAAIifAAQgKAAAAAJQAAAVAYAUQAXAUAbgBQARAAATgFQAUgHANgJQALgIAHAAQAJAAAJAKQAIALAAAMQAAAYgfAXQg2AphGAAQhGAAgxgqgAgUhhQgLAOAAAPQAAAKAFAEQAFAEAMAAIAiAAQAVAAAAgUQAAgTgLgLQgKgLgRAAQgSgBgKAPg");
	this.shape_1.setTransform(177.9,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AhBC4QghgfAAgyIAAicQAAgFgCgEQgFgCgFAAIgjAAQgKAAgCgEQgDgDAAgMIAAgPQAAgKAIgFICahhIAOgDIAcAAQAIAAADAEQADADAAAMIAAAuQAAAKAEADQADADAKAAIA/AAQAMAAAEAFQAEAEAAAPIAAAUQAAAQgFAHQgFAGgMAAIg+AAQgJAAgDADQgEAEAAAJIAAByQAAAUAKANQAKANAQAAQANAAAWgMIAKgDQAIAAAHAKQAHAJAAAMQAAAVgXATQgxAphEAAQg1AAghgeg");
	this.shape_2.setTransform(143.3,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgaCpIglgDIgJABIgPABQgQAAgJgIQgOgNgLgaQgNgcAAgTQAAgfAZgBQAKABAHAGIAiAhIAXAVQAJAGALgBQAKABAIgGQAGgGAAgKQAAgQgagMQg3gbgXgcQgZgcAAglQAAgoAZgdQAjgqA9gBQAQABAnAHIAMABIAWgGIAOgDQAQABAPATQANAQAJATQAHATABAOQAAANgKAKQgKAIgNAAQgNABgIgGIgfgZQgWgWgOAAQgKABgGAGQgHAIAAAJQAAARAfAOQA6AaAeAeQAbAZAAAmQAAAugqAgQgkAcgzAAg");
	this.shape_3.setTransform(110.9,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AhyCEQgYgUgPgdQgUgmAAgqQAAg5AigtQAegnAvgUQAigPAoAAQBAAAAtAlQAXASAOAaQAQAcAAAbQAAAXgJANQgKAOgOAAIieAAQgLAAAAAJQAAAVAYAUQAWAUAcgBQAQAAAVgFQATgHANgJQAMgIAGAAQAJAAAIAKQAJALAAAMQAAAYgeAXQg2AphHAAQhGAAgwgqgAgVhhQgKAOAAAPQAAAKAGAEQAEAEAMAAIAhAAQAWAAAAgUQAAgTgKgLQgLgLgRAAQgSgBgLAPg");
	this.shape_4.setTransform(76.2,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgtDjQgdgJghgVIgIgEIgVAHIgVADQgVAAAAgNIACgKQAGgWADghIAChoIAAhcQAAgjgDgJQgCgJgNgFQgSgHgGgHQgHgHAAgMQAAgWAwgWQAbgMAogIQAngJAcAAQASAAAAAVIgFCEIAAAHQAAAHAFAAIANgKQAnggAwAAQAvAAAlAiQAtAsAABEQAABihKA7Qg0ArhIAAQgiAAgcgJgAgMAEQgGAJAAAeQAABPAFAcQAFAaAXAAQAZAAANgWQANgVAAgoQAAg6gWgbQgMgPgSgBQgRAAgJAMg");
	this.shape_5.setTransform(35,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AiSDeQgVgLgNgSQgNgRAAgTQAAgNAHgMQAIgLALgEQAKgFAAgEQAAgEgJgHQgbgXAAgZQABgQANgRQAMgQAUgKQAIgEAAgEQAAgFgKgJQgjghAAgqQAAgXANgVQALgUAXgPQA2gkBDAAQAZAAAhAHIAqAGQAmAAAkgdIANgGQAIAAAGAKQAHAJAAANQAAAOgJASQgJARgLALQgJAHABAEIAAAIIABAMQABApgcAcQgYAYgnAOQgnANgsAAIgXgCIgNgBQgSABAAAQQAAAMAMAHQALAGAVAAIAmgDQA4gIAaAAQAoAAAWANQASAKALASQAKATAAAVQAAAigZAgQgeAng6ASQgtAOg7AAQhLAAgwgXgAhfCQQAAATAVANQAXANAiAAQAggBATgIQATgJAAgQQAAgIgHgHQgIgFgKAAIgQABIgpADIghgCIgTgCIgGgBQgIAAAAAKgAgoihQgLANAAAVQAAAlAMAWQALAWATAAQAQAAALgNQALgOAAgXQgBglgKgUQgLgUgUgBQgRAAgKANg");
	this.shape_6.setTransform(-6.1,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AiUB/QgxgtAAhHQAAhPA8gzQA+g2BZAAQA+AAAvAhQAhAWAUAlQAWAnAAAqQAABJhEAzQhAAyhTAAQhRAAgygvgAgkhTQgJAKAAATQAAAVAHAhQAIAkAKAaQALAcAXAAQAeAAAAgmQAAgdgIgiQgHglgLgXQgLgWgTgBQgPAAgJALg");
	this.shape_7.setTransform(-47.3,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("ACZChQgcgLAAgSIADgKIAMgTQALgOAAhPQAAgtgGgSQgIgVgXAAQgLAAgIAHQgJAHgCALQgEAMAAA0IAEBFQACAMAPAWIADANQAAAohpAAQg/AAgWgJQgRgIAAgTIABgMIAQgPIAKgOIACgXIADhKQAAhDgiAAQgaAAgEAdQgEAbAAAxIABAxQACALAGANQAJAOAAAJQgBAWgeAJQghAJgpAAQg0AAgZgIQgYgJAAgSIADgLIAPgPQAPgOACgYIAEhXQAAgggDgMQgEgNgKgIIgNgMIgDgLQAAgXAkgNQBWgfAqAAQAUAAAAAbIAAAGIgBAJQABASAKAAQAGAAAMgOQATgWAbgMQAcgMAeAAQA3AAAWApQAJAPAFAAQAEAAANgNQAtgrA3AAQAsAAAcAYQAdAZAAAyIAAAlIgBA0IAAAoIgBAKQAAAWAOAQIAKANIACAJQAAArhmAAQgtAAgcgKg");
	this.shape_8.setTransform(-101.7,7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AhyCEQgYgUgPgdQgUgmAAgqQAAg5AigtQAegnAugUQAjgPAoAAQBAAAAtAlQAXASAOAaQAQAcAAAbQAAAXgJANQgKAOgOAAIifAAQgKAAAAAJQAAAVAYAUQAWAUAcgBQAQAAAVgFQATgHANgJQAMgIAGAAQAJAAAIAKQAJALAAAMQAAAYgeAXQg2AphHAAQhGAAgwgqgAgVhhQgKAOAAAPQAAAKAGAEQAEAEAMAAIAhAAQAWAAAAgUQAAgTgLgLQgKgLgRAAQgSgBgLAPg");
	this.shape_9.setTransform(-153.4,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AhBC4QghgfAAgyIAAicQAAgFgCgEQgFgCgFAAIgjAAQgKAAgCgEQgDgDAAgMIAAgPQAAgKAIgFICahhIAOgDIAcAAQAIAAADAEQADADAAAMIAAAuQAAAKAEADQADADAKAAIA/AAQAMAAAEAFQAEAEAAAPIAAAUQAAAQgFAHQgFAGgMAAIg+AAQgJAAgDADQgEAEAAAJIAAByQAAAUAKANQAKANAQAAQANAAAWgMIAKgDQAIAAAHAKQAHAJAAAMQAAAVgXATQgxAphEAAQg1AAghgeg");
	this.shape_10.setTransform(-188.1,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AgaCpIglgDIgJABIgPABQgQAAgJgIQgOgNgLgaQgNgcAAgTQAAgfAZgBQAJABAIAGIAiAhIAXAVQAJAGAKgBQAMABAGgGQAHgGAAgKQAAgQgagMQg3gbgXgcQgZgcAAglQAAgoAZgdQAjgqA9gBQAQABAmAHIAOABIAVgGIAOgDQAPABAQATQANAQAJATQAHATABAOQAAANgKAKQgKAIgNAAQgNABgIgGIgfgZQgWgWgOAAQgKABgGAGQgHAIAAAJQAAARAfAOQA6AaAfAeQAaAZAAAmQAAAugqAgQgjAcg0AAg");
	this.shape_11.setTransform(-220.4,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AgFDQIABgKIAKhDIADgVIABgGQAAgMgNgBIgUAAQgPABgBAOIgBAHIgFA4QAAATgKAHQgIAHgYAJQgZAKgIAAQgLAAAAgNIACgKIALhDIADgPIABgOQAAgKgRgBIgZACIgHAAQgPABAAgLIAKgYIARgdQALgOAPAAIAJABIAGAAQAIAAACgNIADgSIAAgFQAAgJgLAAIgfABIgIABQgOAAAAgKIAKgZIARgdQALgOAOAAIAKACIAGAAQAIAAACgNIACgNIACgvQABgPAJgHIAggOQAXgJAJABQAKgBAAALIgCALIgEAhIgHAxIgBAIQAAAJAOAAIASAAQAKAAADgDQAEgEABgKIACgMIADguQAAgQAJgHQAKgGAXgIQAWgJAJABIAIADIAEAHIgDALIgFAhIgHAxIgBAIQAAAJAMAAIAfgBIAKgBQALAAAAALQAAAHgRAgQgOAbgPAAIgPgCIgHgBQgHAAgCANIgCAPIgBAJQAAAKATAAIAYgBIAJgBQALAAAAAKIgIAZIgRAcQgKAPgLAAIgPgCIgGgBQgIAAgCANQgFAfgBAgQAAATgKAHQgIAHgYAJQgZAKgIAAQgJAAAAgNgAgSgaIgEAMIgDASIAAAHQAAAJAMAAIAVAAIAMgCIAEgMIADgSIABgIQAAgIgNAAIgVAAg");
	this.shape_12.setTransform(-257.8,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-44.2,565.8,88.5);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8F").s().p("AgJCfQgdAAgVgUQgVgVAAgdIAAixQAAgeAVgUQAVgVAdAAIATAAQAdAAAVAVQAVAUAAAeIAACxQAAAdgVAVQgVAUgdAAg");
	this.shape.setTransform(16.5,-15.9,0.409,0.409,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F69E8F").s().p("AgFC3QgjAAgagZQgZgZAAgkIAAjBQAAgjAZgaQAagZAjAAIALAAQAkAAAZAZQAZAaAAAjIAADBQAAAkgZAZQgZAZgkAAg");
	this.shape_1.setTransform(9.5,-19.1,0.409,0.409,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F69E8F").s().p("AgFDRQgoAAgbgcQgcgbAAgnIAAjlQAAgnAcgbQAbgcAoAAIAMAAQAnAAAcAcQAbAbAAAnIAADlQAAAngbAbQgcAcgnAAg");
	this.shape_2.setTransform(1.8,-20.9,0.409,0.409,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F69E8F").s().p("AgGC3QgpAAgegdQgegeAAgqIAAikQAAgpAegeQAegdApAAIANAAQApAAAeAdQAeAeAAApIAACkQAAAqgeAeQgeAdgpAAg");
	this.shape_3.setTransform(-7.1,-20.5,0.409,0.409,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F69E8F").s().p("AhSFnQgihAgdhZIgWhLQgViNgKiUQgVknA4ghQA5ghAtD+QAWB/ALCFIA2AtQA/A4ArA5QCJC2h6BzQgrApgqAAQhKAAhGiEg");
	this.shape_4.setTransform(-13.4,-12.7,0.409,0.409,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA725C").s().p("Aj2IIQhEgQg1gfIgogcIAAtNIAQgNQAUgOAWgKQBIggBAAZQAOAgAIA0QADhLAHhGQA5goA2ARQANAEAVALQAPAJAFgBQAcAqAQCnIAGBRQgChbADh7QA1hqBSArQAqAVAeAqIAEEvQAEgXAFgmQAIhOgBhOQAVhLA8AeQAeAPAaAeIAHBkQAGB7gIBuQgWFhiPBmQjCBZikAAQhCAAg9gOg");
	this.shape_5.setTransform(2.4,-9.5,0.409,0.409,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B56556").s().p("AkuFKIAAqTIJdAAIAAKTg");
	this.shape_6.setTransform(-5.5,18,0.409,0.409,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-33.6,42.2,67.3);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8F").s().p("AgJCfQgdAAgVgUQgVgVAAgdIAAixQAAgeAVgUQAVgVAdAAIATAAQAdAAAVAVQAVAUAAAeIAACxQAAAdgVAVQgVAUgdAAg");
	this.shape.setTransform(16.5,-15.9,0.409,0.409,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F69E8F").s().p("AgFC3QgjAAgagZQgZgZAAgkIAAjBQAAgjAZgaQAagZAjAAIALAAQAkAAAZAZQAZAaAAAjIAADBQAAAkgZAZQgZAZgkAAg");
	this.shape_1.setTransform(9.5,-19.1,0.409,0.409,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F69E8F").s().p("AgFDRQgoAAgbgcQgcgbAAgnIAAjlQAAgnAcgbQAbgcAoAAIAMAAQAnAAAcAcQAbAbAAAnIAADlQAAAngbAbQgcAcgnAAg");
	this.shape_2.setTransform(1.8,-20.9,0.409,0.409,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F69E8F").s().p("AgGC3QgpAAgegdQgegeAAgqIAAikQAAgpAegeQAegdApAAIANAAQApAAAeAdQAeAeAAApIAACkQAAAqgeAeQgeAdgpAAg");
	this.shape_3.setTransform(-7.1,-20.5,0.409,0.409,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F69E8F").s().p("AhSFnQgihAgdhZIgWhLQgViNgKiUQgVknA4ghQA5ghAtD+QAWB/ALCFIA2AtQA/A4ArA5QCJC2h6BzQgrApgqAAQhKAAhGiEg");
	this.shape_4.setTransform(-13.4,-12.7,0.409,0.409,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA725C").s().p("Aj2IIQhEgQg1gfIgogcIAAtNIAQgNQAUgOAWgKQBIggBAAZQAOAgAIA0QADhLAHhGQA5goA2ARQANAEAVALQAPAJAFgBQAcAqAQCnIAGBRQgChbADh7QA1hqBSArQAqAVAeAqIAEEvQAEgXAFgmQAIhOgBhOQAVhLA8AeQAeAPAaAeIAHBkQAGB7gIBuQgWFhiPBmQjCBZikAAQhCAAg9gOg");
	this.shape_5.setTransform(2.4,-9.5,0.409,0.409,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B56556").s().p("AkuFKIAAqTIJdAAIAAKTg");
	this.shape_6.setTransform(-5.5,18,0.409,0.409,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-33.6,42.2,67.3);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9892F").s().p("AgxA0QgVgVAAgfQAAgeAVgWQAVgVAcAAQAeAAAUAVQAVAWAAAeQAAAfgVAVQgVAWgdAAQgcAAgVgWg");
	this.shape.setTransform(4.6,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9892F").s().p("AhcBiQgngpAAg5QAAg4AngpQAngoA1AAQA3AAAmAoQAnApAAA4QAAA5gnApQgmAog3AAQg1AAgngog");
	this.shape_1.setTransform(-32.7,48.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_2.setTransform(-23.5,33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_3.setTransform(-19.3,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_4.setTransform(-7.6,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_5.setTransform(-3.4,30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_6.setTransform(6.6,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_7.setTransform(13.7,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_8.setTransform(14.8,-12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#C9892F").p("Ag5gdIARB2IBjg6IgRh3g");
	this.shape_9.setTransform(22,-9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_10.setTransform(23.1,-30.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_11.setTransform(30.3,-26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C9892F").p("Ag9g3QADAAAAAAQAFAFAZAKQAZAKADAEQAHAEAVAOQANAIAPAEIhjA6g");
	this.shape_12.setTransform(31.7,-45.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#C9892F").p("Ag6g4QAJAIAOAGQAbAKAFADQAGAIAXAJQAZAKAHAGIhjA6g");
	this.shape_13.setTransform(38.7,-41.4,1,1,0,0,0,0.1,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9892F").s().p("AgxAyQgUgVAAgdQAAgcAUgUQAVgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAVQgTAUgeAAQgcAAgVgUg");
	this.shape_14.setTransform(-69.6,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9892F").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	this.shape_15.setTransform(-32.6,49.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_16.setTransform(-41.7,35.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_17.setTransform(-45.9,42.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_18.setTransform(-57.5,25.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_19.setTransform(-61.7,32.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhwg");
	this.shape_20.setTransform(-71.6,8.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_21.setTransform(-78.7,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_22.setTransform(-79.8,-8.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C9892F").p("AA6gbIgSBvIhhg3IAQhwg");
	this.shape_23.setTransform(-86.8,-5.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhwg");
	this.shape_24.setTransform(-88,-25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_25.setTransform(-95.1,-21.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#C9892F").p("AAphAQACgBgEABQgEADgQAJQgPAIgEADQgKAGgTASQgRAQgNACIAKAIIBiA2IARhug");
	this.shape_26.setTransform(-97,-40);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C9892F").p("AA0g/QgYAUghAPQgLAOgnAYIBiA3IAShvg");
	this.shape_27.setTransform(-103.5,-36.4,1,1,0,0,0,0,0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#363030").s().p("AGxEAQgNhOgcg2QgnhMg8gKQg0gIg3gcQgogTg5goQhDgvgrgXQg+ggg+gMQgrgIhfgKQgvgEgkgGQguAHgtgCQgYgBAAgZQAAgZAYABIAUABIAEgNQACgKAJgFQAKgFAJADIBEAVQAJACAFAHIBJAIQBnAKA4AQQA4APA/AmIBtBJQBKAyAzAPIA1AKQAhAGARANQAtAlAgBFQAaA6AMBEQAEAYgYAHIgKABQgQAAgDgTg");
	this.shape_28.setTransform(3.6,-274.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#363030").s().p("AAAD1QgYgHAFgXQAQhTgPiHQgTipABgxQABgZAZAAQAYAAgBAZQgBAyASCuQAPCLgRBWQgEATgPAAIgJgCg");
	this.shape_29.setTransform(51.2,-230.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#363030").s().p("AlABnQgSgSAPgSQBOhfCAgPQAOgCAGAKIAGgDIAOgHQgCgFABgHQADgWAWABQAoABA0gJIASgDQAGgEAJAAIAJgBIAxgJQBvgTBJAbQAWAIgGAYQgHAYgXgIQgRgHgUgDQgGAKgQABIg/ABIAIADQAUAHgCAVQgCAUgWAAQhjAAhegXIgMAFIhtA1QhBAfgzgHIgCAAQgTAQgRAVQgIAKgIAAQgIAAgIgJgABkheICNgCQgegDgeAAQgpAAgoAFg");
	this.shape_30.setTransform(-19.4,-270.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#363030").s().p("AgbCiQgQgGACgRQADgdABgdIgBgIIgRjTQgCgZAZABQAZAAACAYIAHBlQAJAGABAOIAAAHIAAAAQAIgKARAFQAYAGgGAXQgDANAAAfQAAAdgFAOQgFAOgPARIgbAZQgGAGgKAAQgFAAgGgBg");
	this.shape_31.setTransform(50.5,-202.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#363030").s().p("AgaBgIgUhgQgCgQABgJQABgNAKgJIAGgEQgLgJAEgQIgCgHQgIgXAYgGQAXgGAIAWIACAEQARAvASApQAKAVgTALQgOAIgMgIIABADIAKAzQAFAYgYAHIgJABQgPAAgEgSg");
	this.shape_32.setTransform(59.3,-214);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#363030").s().p("AAUB+IgLgLQgLgLADgMQgPgigKgiIgIg5QgGgogNgLQgTgOAMgWQANgWATAPQATAOAIAUQAHAQAEAcQAKBOAlBDQALATgRANQgIAGgIAAQgIAAgJgIg");
	this.shape_33.setTransform(51.7,-258.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#363030").s().p("AA3FmQgYgHAEgYQAaikhDiaQgFgMAGgMQAFgNAPAAQASABARADIgIgRQgRgjgTgZIgmgnQgXgWgHgWQgEgNALgMQALgLANAFIALAEIhbhnQgQgSASgRQASgSAPASICiC5QALANgJASQgJASgSgIIgOgGQALAPAKAQQAUAhAeBLQAGAQgPAKQgOAJgOgHQgNgGgNgEQA2CXgaCiQgCASgQAAIgKgBg");
	this.shape_34.setTransform(50.9,-247);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#363030").s().p("Ag6BPQgJgDgGgJQgGgKAEgJQAQgnAOgPQAGgIAQgJQARgKAGgGIANgXQAJgMANgEQAMgCALAEQANAFAEALQAKAWgWANQgKAGgHgCIgCAFQgDAFgHAHQgFAFgRAKQgOAJgKANQgHAKgIASQgEAKgIAFQgFAEgHAAIgHgBg");
	this.shape_35.setTransform(-101.6,-278.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#363030").s().p("AgFAcIgXgUQgIgGAAgKQABgMAHgGQAHgIAKAAQAJAAAIAIIAXATQAIAGgBALQAAAKgHAIQgHAHgKAAQgJAAgIgHg");
	this.shape_36.setTransform(-94.7,-282.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#363030").s().p("AjXFpQgTigAYiYQAMhOAOgqQAHgTAIgRIgMAEQgSAHgJgSQgJgQAMgOQA4hCBFgxIgMAFQgWALgLgUQgLgUATgOQBFgzBRgVQBSgWBVAKQAYADAAAZQAAAZgYgDQhPgJhLATIgOAEIAGADQAMAGAAAQQAAAPgMAGQhKAkg9A1QALABAHAMQAKASgOAMQgqAkgUBIQgLAmgLBWQgPCAARCMQADAYgZAAQgZAAgDgYg");
	this.shape_37.setTransform(-99.1,-259.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#363030").s().p("AgXAAQAAgYAXAAQAYAAAAAYQAAAZgYAAQgXAAAAgZg");
	this.shape_38.setTransform(-79.1,-295.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#363030").s().p("AF8CfQghgjgsghIAEADIgKgHIAGAEIhqg1Ig4geQgOgDgMgBQgJAHgLAFQgeAOgkgJQgQgEgCgRQgBgJAFgHIAcgDIgBgHQASAEAQgIIAAgBIgVgIQgQAFgQAKQgFAEgDAEQgqAHgpAPQgUAHgJgVIgCgEIgzAMQgSAEgKgQQgJgNAHgKIgIAEQgEACgFABQgPAMgQgQIgFgGQhOAehWAJQgMABgIgKQgIgKAEgMQAHgXANgSQABgEAFgDQAGgIAIgGQAbgWApgFQAHgBAFACQBWgeBagSQARgEALAQQADAGABAEQBcACBYAXQAPAEACARQACANgHAHQgGgIAAAIIAEACIACgCIAAABIAGAFIAJADIAGABQAPACAGAKIAPAHQBRAlA5AkIAkAZIACABIABABIAAAAIAKAHQAoAfAgAjQARARgSASQgIAJgJAAQgJAAgIgJgAg8hJIAJgCIgFgBg");
	this.shape_39.setTransform(2.8,-293.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#363030").s().p("AC9BgQhShNhlgmQgwgTgzgIIBsA4IAgAQQAVAMgNAVQgMAVgWgLIgugYQgfgQgYgKIgBABQgrAgg1gQQgXgHAGgYQADgKAGgEIgMgFQgWgJAGgWIACgHIgIgEQgRgJAGgSQAGgTASgBQB3gGBwAsQBuAqBZBUQASARgSARQgJAJgJAAQgJAAgIgIg");
	this.shape_40.setTransform(19.2,-293.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#363030").s().p("AkzBZQgMgVATgNQBXg9BogRQAygPA1gIIgJgRQgIgRANgOQAMgNARAJQBDAmBHAGQACgOAQgGQAfgNAegKQAXgIAHAYQACAIgBAGIAVACQAUABAEAVQAEAVgWAGQhNAThNgJQgsgFgpgQQAAAHgEAGQgGAKgPACIgvAHQgFAOgSAAQghABgfAGQhYAahSAuQgIAEgGAAQgMAAgHgNg");
	this.shape_41.setTransform(-68.5,-293);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#363030").s().p("AhwBAQgNgQAOgQQAOgRASgPIgjAKQgYAGgGgXQgHgYAXgHQBkgbBjgIQAWgCACAWQAAAHgBAGIAVgEQAYgFAHAZQAGAYgYADQhwAWhgAuQgIAEgGAAQgLAAgHgLg");
	this.shape_42.setTransform(-28.9,-299.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#363030").s().p("AlrFAQgSjqCki7QCDiVCugoIgGAAQgSgDAAgVQABgVARgEQAugKBQAQQBWARAngFQAYgDAHAYQAGAYgYADQgoAGhWgRIgSgEQAEAIgDAJQgEASgTABQjVAMiVCuQiTCsAQDWQACAYgZAAQgZAAgCgYg");
	this.shape_43.setTransform(-87,-271);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#363030").s().p("AgWAvQgJgFgCgKQgCgKAEgJQAKgVAHgXQAHgXAXAGQAYAHgHAXQgIAcgOAcQgEAJgKACIgHABQgGAAgGgDg");
	this.shape_44.setTransform(53.1,-239);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#363030").s().p("AH7EqQAAiJgLhJIgIgmIgMgQQg+hMgtgrQhMhJhOgXIgkgKQgWgGgOgHIglgVQgMgGgKgBQgMAGgRAAQgSAAgGgTIgBgDIgdAEIgCADQgNAMgRgIIgXAHQgOAFgJgKIgBABQgNAKgOgMQgFgEgCgFIgMAJQgKAHgJAKIAAABIgFAEQgSAMgMgRIgMAHQgQAKgOgOIgEgEQgJARgUgFIgGgCQgKAKgPgGIgFgDQgEACgGAAQgSAGgVACIgMAPQgKAOgQgIIgGgEIgHANQgLASgUgIIgFgDIgJAJQgMALgPgGQgHgDgEgFIgcAfQgLALgRgGQgKgEgEgHIgEABQgKADgJgFIgUgLQgVgMANgWQAMgVATAKQAOgUAUgQQAMgJAQAFQALADADAJIAKgLQAKgLAOAEQALAEAFAJIARgUQAJgNANABIAFgIQAKgQASAFQAJACAEAGIAbgiQAKgOAQAIQAIAFAEAGQANgEAOgDQAJgCAKAEIAJgKQAGgGAJgBQAJgCAHAFIADACQAMgLASAAQAOgBAGANIATgFQAOgDAKAJIADADIAMgEQANgEALAKIABACQAXgLAbgGQAJgCAJAFQAJAFACAKIABADQAkgEAlAEQAPACAGALQADAEAAAFIAUAHQAeALA6AaQBfAcBSBNIAaAZIgDgFQgMgVAVgMQAUgLAOATQAmA1AWBFIARAtIAFAIQBQBvgoBiQgJAUgTgCIgBgBIAAAcQAAAZgZAAQgZAAAAgZgAg6kcIAAACIAZgGIgEgBQgKAAgLAFgAj8kdIABABIACgCIgGgBIADACgAiwkvIACAHQAKgHAMgEQgFgCgEAAQgIAAgHAGg");
	this.shape_45.setTransform(-5.3,-238.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#363030").s().p("ADGCHQgdgqg3giQgegRhJghIjzhsQgWgKANgWQAMgWAWAKIESB7QA7AaAlAbQAwAiAfArQAOAUgWAMQgJAFgHAAQgLAAgJgMg");
	this.shape_46.setTransform(24.6,-255.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#363030").s().p("AiKAIQgSgQASgRQASgSARAQQAdAaAaAFQAcAGAigOQAZgLBHgpQAVgMAMAVQANAWgVAMQgwAegcAPQgwAbghACIgGAAQgzAAg7g1g");
	this.shape_47.setTransform(-61.4,-260.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#363030").s().p("AMlF8QgXAAgCgYIAAgQQAEiCgUhgQgah+hGheQhAhXhcg5Qheg6hpgQQhtgQiHAeQgOADjdBAQg0APgnACQgzAEgngRQgQgHgXgTQgagWgNgKQgvgjgmAVQhcAzhUBQQhPBMg+BcQgOATgVgLQgWgNAOgUQBPh1BhhUQAtgnAzgjIA0gkQAggUAagFQAngGAoAfIBCA3QAzAfBUgUQAvgLBXghQEdhdDNBFQBmAiBVBGQBVBGA4BdQA3BbAUB5IAFAkQAFhGgEhGQgGi4g9i+QgIgXAYgGQAZgHAHAXQA9C6AIC/QAEBjgJBfIgEArQgDAZgFASQgCAHgPAYQgJAOgCAKIAAAGQgBAYgXAAIgBAAg");
	this.shape_48.setTransform(-31.2,-226.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#363030").s().p("ADvBnQgRgKgOgNQgGABgGgBQgOgDgGgLQgHgCgGgFIgBAAQgJAAgGgEQgFACgGAAQgPAAgGgNQgHAFgKABQgGAAgFgDQgHAEgLgDQgLgEgEgHQgGgCgDgDQgIgCgEgFIgBgCIgDAAIgBAAIAAAAQgGAEgKgCIAAAAIgEAGQgFAJgJACQgJADgKgFIgOgHQgLgFgBgNIAAgBQgHADgKgCIgFgCIgBACQgHAWgWgFQgKAOgRgDQg+gIhCgRQgYgGAHgXQAGgYAYAGIAKACIACgLQADgWADgJQAMgkAcgBQAYgBAMARQAGgQASAAQARABAGAPIAGgBQAPAAAGAJQAFgCAGAAQAHAAAFADIACgDQAIgOARACQASACADAQIABAIIAFABQANAEAFAMIAAAAIAAAAIAAAAQAJgGAKADQAJACAFAHQAEACADACQALAEAFAJQAHgBAGAEQAFgBAGACIAIADQAKgFAMAFQAIACAEAGIAIAAQAHABAFADQAOACAFAPIABACIAGADIADABQAGABAFADIAFAAQAOABAIALQAPAVAWALQAVAMgMAVQgIAOgMAAQgHAAgHgEgACMgPIAAAAIAAAAg");
	this.shape_49.setTransform(-6.7,-280.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#363030").s().p("AAJAxQgKgDgEgJQgOgbgQgVQgGgIAEgLQADgLAIgFQAJgFAKADQAIADAGAIQASAaAMAXQAEAKgCAJQgCAKgJAFQgGAEgHAAIgGgBg");
	this.shape_50.setTransform(51.1,-254.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#363030").s().p("AgEApQgJgBgGgHQgGgHAAgJQAAgRgCgPQAAgKAIgIQAHgHAKAAQAJgBAIAIQAEAFACAGQAIAIgBAJIgFAcQgCAJgIAGQgHADgHAAIgDAAg");
	this.shape_51.setTransform(55.8,-230.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#363030").s().p("ACBCyQgNgRgNgyQgzglgrguIAAAAQgLAWgWgLIgDgCQghgRgQghQgIADgKgEQgGgDgEgEQgGADgJgCQgRgDgKgIQgLgHgHgQQgFgKADgKQgcgXAIgaQACgHAEgFIgPgDIgGgBQgVgDADgYQAEgYAUACQAXADA1ADQAvAGAWAVQAMAMAFAPQAzAEAsAWIAOAHQARACARAJQAiAUAIAoIABAEQAWASAPAcQAMAZARBAQAHAXgZAHQgVAGgHgRIACAfQABAUgSADIgIABQgNAAgIgLg");
	this.shape_52.setTransform(32.5,-266);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#363030").s().p("AEiB1Qh4hSioguQhzghjDgdQgYgDAHgYQAHgYAXADQDGAdB3AiQCrAxB6BTQAUANgMAWQgIANgKAAQgHAAgIgFg");
	this.shape_53.setTransform(15.7,-281.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#363030").s().p("AgaCSQgYgHAGgXQAgh0AJh6QACgYAYAAQAZAAgCAYQgJCBgiB6QgEASgQAAIgJgBg");
	this.shape_54.setTransform(55.8,-211.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#363030").s().p("AA+CmQgZAAgCgYQgNiVhjhxQgQgSASgSQARgSAQASQBxCAAOCqQACAYgYAAIgBAAg");
	this.shape_55.setTransform(44.2,-241.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#363030").s().p("AGaDaQgOgugtgkQgagVg+ghQh6hAhXgfQh1gshrgGQh7gGhmAtQgWAKgLgUQgMgTAUgOIAGgFQgOADgIgKQgqg2Ajg0IAIgKIAAgMQAAgZAZAAQAMAAAGAGQAWgJAcgBQAMAAAHAKQAIAKgDAMIgBAEQABAGgCAHIgPAqQgDAKgGAFIgCALIAEgDQAWgMAMAVQADAFABAFQBBgNBIAEQB5AGCCAzQB5AuB1BCQA0AeAfAfQAnAnAOAwQAHAYgYAGIgKACQgQAAgFgTg");
	this.shape_56.setTransform(4.2,-267.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#363030").s().p("AhqBGQgWgMAOgUQAjgxAXgXQAognAngBQARgBAMALQAGAGACAHQAPgDAOgDQAYgDAHAYQAGAYgYAEQgmAGgdALQgHADgGAAIgeAZQgTAPgRgQIgEgEIgXAfQgIAMgMAAQgHAAgIgFg");
	this.shape_57.setTransform(-60.8,-280.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#363030").s().p("ArCFLQADiEAchhQgDgJAGgKIAFgIQASg2AagpQBKh5CmhhIADgBQADgQAOgEQC5g+DBggQAYgEAGAXIABADIAxgGQA5gFAtACQAsACA2AOQAfAJA/ATQA4ARB0AWQBgAbAtBDQANAUgVANQgWAMgNgUQgog6higXQhygSgxgQQg3gSgggHQgwgMgrAAIgbAAIgFABIgYAEQAHAGACALQADASgPAGIgeAMIAfgDQAWgDAHATIAXgDQASgCAFAUIABAKIAGgBQAYgDAHAXQAHAYgYAFQg0ALh7A3QhpAwhFAGIgFAEQgKAHgMgFIAAgBIgBABQgrALgWgcQgEgFgFgNQgFgMgEgGQgDgEgJgIQgFAEgJAAIgEAAQhmA2hhBGQgLAJgLgGQhDA/g3BNQgHAJgIADQgVBAgFBFQgCAYgYAAIgBAAQgYAAABgYgAjXiaIABAFIAAALQAEgNAIgNIgNAKgAigi6IgKAFIAHAEIAEgHIADgEIgEACgAiMjEQAGAAAGADQAIgOARACQAGABAFADIAFgOQgcAIgZALg");
	this.shape_58.setTransform(-49.7,-260.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#363030").s().p("AtTH8QAIhCgEhcIgKifQgLjEAqh0QBTjiD+hmQDBhOEfgDQERgDEMA7QBxAZBJAoQBeA0AtBSQALAWgVAMQgWANgLgVQgwhZhxgwQhIgeiLgZQkOgwkDALQiNAHhoAXQiDAdhjA8QhhA6g+BZQhBBcgQBsQgOBZAMCrQANCygKBSQgDAYgZAAQgZAAADgYg");
	this.shape_59.setTransform(-37,-244.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#363030").s().p("AgPB3QgYgHAGgXQAdhggOhRQgDgXAXgHQAYgHAEAYQAQBfgfBsQgFASgPAAIgKgBg");
	this.shape_60.setTransform(48.4,-254.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#363030").s().p("AsAG0IgqgtQgQgSASgSQANgNANAHIgJheQgHhdAChGQABgtACgWQAFgjALgcQAWgzAegtQBAhcBjhHQBahABwgpIADgBQAKgEAKAGIAEAEIAFAGQADAGgBAGIAAAGQgBAzA+gJQARgDBQgdQBOgeBDgTQCXgqCWAPQCZAPCBAuQCXA2BiBZQASARgSARQgSASgRgQQg8g3hUgnQhDgghfgbQjEg2idARQhKAIhiAhQhvApg4ASQg6AUgvgXQgdgOgLgbQgMACgKgFQhQAihDAxQheBEg6BZQgrBDgIAsQgFAcgBAnIAABDQACA6AHBNIANCHQACAQgRAGQgGADgFAAQgKAAgHgIg");
	this.shape_61.setTransform(-38.6,-229.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DA735C").s().p("AA4BlQgcgHgOgYIgEgIQglgpgZgqQgPgZgDgMQgFgUANgRQAFgHAJACQAJABAAAKIAAALQAIACAAAKQgBALAEALIADAGIAeAqQAHAJAIAQQANASADAIIABAEQAMAPAOADQAMADgEAMQgDAKgIAAIgEgBg");
	this.shape_62.setTransform(-125.4,-174.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DA735C").s().p("AAsB0QgTgZgXglIgng/IgXglQgJgVAIgUQARglAmAGQAkAGAOAjQADAGgDAEQABAEgDAFQAFARgCAQQAAAFgGAUQgFAOACAKQACAPAKAZIARAnQADAJgJAFQgEADgDAAQgFAAgDgEgAAMhWQAIABAJAEIgHgFQgJgGgHAAIAGAGg");
	this.shape_63.setTransform(-125.3,-177.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DA735C").s().p("Ag2BgQgGgLAKgGQASgMAPglIABgDQgHgFAFgJIALgVQgIgEADgKIAEgIIgEgBQgLgHAHgKQANgWAKgLQAPgPATgFQAIgCAFAHQAFAGgEAHIgJAPQAGAFgDAHQgGATgPAYIgLARIgRAsQgPAmgWAOQgEACgDAAQgGAAgEgGg");
	this.shape_64.setTransform(57,-177.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DA735C").s().p("AhJBhQABgKAOgXQAMgTAFgOQAGgQgBgUQAAgaADgJQADgMAJgIQAAgEACgEQAGgJALgVQAJgRAQgEQAOgEANAIQANAHAGANQAJATgIAYQgFAOgQAYQgLAPgQAfQgSAigHANQgNAWgbAOQgKAGgHAAQgOAAABgYgAAMhIIgHANQACAIgHAFQgNAJABAgQABAmgEAIQgFAPgUAaQgKATAKgNQAKgLAGgKIAUgnQALgaAIgLQAWgZACgKQgLgogIAAQgEAAgEAMg");
	this.shape_65.setTransform(58.1,-179.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#363030").s().p("AAFA/QgcgBgTgGQgWgIgUgQQgYgRgLgLQgSgSADgTQABgJAMgEQAUgHAggDIA2gDQA/gFBFACQASAAAAATQAAATgSgBQhUgBhLAHIgmAFIABACQAJAEANAMQANANALAEQAJAEAdABQASAAAAATQAAASgRAAIgBAAg");
	this.shape_66.setTransform(-37.9,-136.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DA735C").s().p("AgDAwQhqgBhOgvQgUgMAMgVQANgWAVANQBEAqBfgBQBTAABVgfQAXgIAGAYQAHAWgXAJQhbAhhbAAIgEAAg");
	this.shape_67.setTransform(-31.6,-114.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#363030").s().p("AhGAYQgFgMAWgJIBAgdQAJgEALgBQANgBAFAGQAPgCAGAHQAFAGgHAIQgFAGgIACQgyARgrALQgKADgHAAQgMAAgDgIg");
	this.shape_68.setTransform(-66.9,-129.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#363030").s().p("AhFAQQgJgDAEgIQADgFAHgFQAUgLAVAGQAdAJAYgMQAbgOAOAIQAHAEgDAHQgCAGgIADQgrAWgpAAQgZAAgZgHg");
	this.shape_69.setTransform(-46.6,-133.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#363030").s().p("ADxBTIg6gQQgcgIgbgFQgLAFgSgCQgMgBgDgEQgKACgPABQgWAAAEgLIgHAAIgQAAQgLAHgSAAQgKAAgFgDIgLACQg2AIgSABQgVABgNgDQgLgDgIgHQgHACgLABQgaACAFgRIAEgSQgOAOgRANQgJAHgUAAQgWAAAEgPIAAgBIgEAEQgJAJgXACQgaADAFgRQAPg8AlgxQAKgOAcABQAcAAgMAQIgEAGIABgBQAKgKAaABQALAAAEADQAJgGAPgDQAZgEAAATIAAAJIAMgPQAIgJAYgCQAZgCgEARIgFASIAIgMQAKgNAagCQAKgBAFACQAIgKAYgDQAXgCAAAMIAOgCIAJABQAKgFAOgBQAagBgGATIARgDQAagCgGAQIgLAbIABAAQAYgDgCASIgCAJIAGgBQAVAAgCAOIgBAFQBLALBEAfQAQAIgQANQgOAMgMABIgKAAQgXAAgagGg");
	this.shape_70.setTransform(-21.4,-135.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#363030").s().p("AE9BYQgTgmgMgUQgTgfgXgUQgggbgxAAIhYALQhGAHhWgGIhFgHQgBAxhOBKQgHAGgYADQgaADAFgLIADgFQgJAEgPADQgXAEABgPIAAgBQgIAGgTACQgcAEAFgMQAKgXANgVQAJghAXgZQAIgfANgMQAMgLATgGQASgGAQACQAOACAHAHQARgDAPADQAJADAHAEIBGAJQA9AHAvAAQAfABA+gJQA9gJAgABQA+ABAuAwQAhAhAiBGQAFALgcAJQgLADgIAAQgMAAgEgIg");
	this.shape_71.setTransform(-33.5,-138);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#363030").s().p("AFgA7QgPgBgYgNIgrgWQgZgLgXAEQgGABgNAFQgMAFgHABQgUADgdgNQgggNgQAAQgOAAgiAIQgeAGgSgCQgKgBgTgGQgUgHgJgBQgOgCgTACIgiAFQgaAEgbgCIgzgHQgLgCgaADQggAFgKABQgdABgNgOIg3AYQgYAKgOgRQgPgRAbgLIBYgnQAOgGANADQAPAEAAAPIAmgEQAngEAGABIAkAJQAVAFAQgBQAQgCAigGQAXgDAYADQARACAdAHQAWAGAkgGQArgIARABQAMAAAeANQAbAKAPgCQAPgCAZgHQAWgEATAEQAOADAjATQAgARAQAAIAlgDQAVgDASAIQAYAKgSATQgTAUgUgJQgLgFgTAEQgVAFgIAAIgBAAg");
	this.shape_72.setTransform(-31.4,-128.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#363030").s().p("AGJB0IhShnIgggpQgUgZgRgNQgbgUgxABQgNAAhEAHQhZAKgWABQgrABhIgNQhPgPgigBQg9gDgcA2IgWAwQgNAfgPARQgHAJgbADQgbACAJgKQAOgRANglQAOgoALgPQAZgkA3gTQA0gRBFAJQAoAGBSAPQAyAGBsgOQBngNA3AJQAgAGAaAXQAOAMAeAmIBjB8QAIAKgcAJQgOAFgJAAQgIAAgDgEg");
	this.shape_73.setTransform(-30.5,-136.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#363030").s().p("ACoAqQhMg4hfAAQhdAAhRA1QgPAKgWgFQgVgFAWgPQBlhCB1gDQB8gDBdBEQALAJgaALQgQAGgKAAQgIAAgFgEg");
	this.shape_74.setTransform(-67.4,-214.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#363030").s().p("AjOAnQgWgLAGgFQBWhMCEALQBvAJBsBAQASALgSAAQgSgBgKgGQhZg1hhgCQhpgChJBBQgDACgFAAQgHAAgOgGg");
	this.shape_75.setTransform(0,-216.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#020203").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_76.setTransform(1.3,-194.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3DAD4F").s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_77.setTransform(1.3,-194.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AiDBAQg3gaAAgmQAAglA3gaQA2gcBNABQBOgBA2AcQA3AaAAAlQAAAmg3AaQg2AbhOAAQhNAAg2gbg");
	this.shape_78.setTransform(1.3,-195.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DA735C").s().p("AiDBSQg3giAAgwQAAgvA3giQA2giBNAAQBOAAA2AiQA3AiAAAvQAAAwg3AiQg2AihOAAQhNAAg2gig");
	this.shape_79.setTransform(1.3,-197.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#020203").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_80.setTransform(-64.8,-194.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3DAD4F").s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_81.setTransform(-64.8,-194.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AiEBAQg3gaAAgmQAAglA3gaQA3gcBNABQBOgBA3AcQA3AaAAAlQAAAmg3AaQg3AbhOAAQhNAAg3gbg");
	this.shape_82.setTransform(-64.8,-195.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DA735C").s().p("AiEBSQg3giAAgwQAAgvA3giQA3giBNAAQBOAAA3AiQA3AiAAAvQAAAwg3AiQg3AihOAAQhNAAg3gig");
	this.shape_83.setTransform(-64.8,-197.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C9846F").s().p("AACB4Qgkg6gPgmQgYg8AOgsQANglAkgLQAlgMAdAaQASAQgSASQgSASgSgQQgSgQgJAYQgIAUADARQACAOAKAZQAQAsAdAsQANAVgVAMQgJAGgHAAQgLAAgIgNg");
	this.shape_84.setTransform(-130,-181.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C9846F").s().p("AA5CaIhGhBQgZgZgQgWQgSADgGgPQgmhWAZhYQAEgOAOgDQANgDALAJIAEAEQAHgGALACQAOADAGAKQAVgIAYAHQAgAKAPAgQAKAWgVANQgWAMgKgWQgGgNgHgHIADAPQAEAXADArIgBAAIABAHQABAHgCAEIACAaQABASgRAFIBFBDQARARgSASQgJAJgJAAQgIAAgJgJg");
	this.shape_85.setTransform(-120.7,-172.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C9846F").s().p("ABgDCQhgg1gwgsQhIhCgMhQQgFglAJghQAKglAagVQAegZApAHQAdAFApAYQAVANgNAVQgMAWgVgMQgcgSgQgEQgbgGgSASQgSASgBAjQgBAyAjAyQAcAoAxAjQAbASBDAkQAWAMgNAVQgIAOgMAAQgHAAgHgDg");
	this.shape_86.setTransform(-122.3,-172.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C9846F").s().p("ABKC0QhEg7g0hMQgfgrgOgZQgXgrgDgjQgEghASgXQARgYAhgFQAdgDAcAQQAUALAdAaQARAQgRASQgSARgSgQIgRgSQgMgMgIAAIguAjQAFARAHAOQAPAgAbAnQAuBJBMBCQASAQgSARQgJAJgJAAQgJAAgJgHg");
	this.shape_87.setTransform(-121.7,-176);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C9846F").s().p("AgjBPQgVgNAJgWIAzhxQAKgWAVANQAWAMgKAWIgyByQgGAOgLAAQgHAAgIgFg");
	this.shape_88.setTransform(57.4,-178.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C9846F").s().p("AhJCyQgVgJAHgUIAFgOQgIAEgNgFQgVgJAHgUQAOgrASgnQgRgIAEgTIAFgRQgIgKAEgMQASg3AignQArgxAxAIQAyAHAQA0QAMAogKA2QgEAXgYgGQgFgCgEgCQglBehBBHQgGAHgHABIgFAHQgHAMgMAAQgFAAgHgCgAgDgJIgWAvIgIAOIAEgFQATgjAQghIAOgZIAAAAQgKAIgNAdg");
	this.shape_89.setTransform(57.8,-180.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C9846F").s().p("AhxC6QgKgRAOgNQA4g0AYgbIAOgPIABgCIAYghQAPgVAKgUQATgogFgqQgEgmgbgGQgDADgEAFQgUAKgbAcIgWAZQgBAXAHAbQAHAWgYAHQgYAGgHgWQgGgVgCgTIgBgBQgSgSAQgSIAEgGIABgFQAJgwAkgaQAggYAkABQAQgHAPAAQAlgCAYAgQAVAegBAmQAAAqgYAuQgHANgMASIgJAQQgNAUgUAYQgdApgRAVQgkAsglANIgIACQgMAAgIgOg");
	this.shape_90.setTransform(58.6,-176.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DA735C").s().p("AgwAjQgYgVgWgjQgMgUAVgNQAWgMAMAUIACACIAEAEIAYAZQALAKAJAFIAJgDQAGgDAIgLQANgSAbgNQAPgIAMAKQAMAKgDAQQgCANgNAKIgWASIgUAXQgLALgOADIgMACQgYAAgcgZg");
	this.shape_91.setTransform(-32.9,-151.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DA735C").s().p("AAOArQgTgIgMgOQgFgHgBgIIgCgCIAAAAIAAAAIAAAAIgBAAQgKgCgFgIQgFgKACgJQACgKAKgFQAJgFAKACQAOAEAOAPIAXAZQAOAMgLASQgIAOgLAAQgEAAgEgCg");
	this.shape_92.setTransform(-36.4,-151.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DA735C").s().p("AhMB7QgJgHABgMIgBhCQAAgwAFghQAQhiBFAIQBFAIAGBUQABAPgBA4QgBArAGAUQAGAXgYAHQgYAHgGgYQgHgXAFg8QAEg2gLgaQgNgbgRAFQgRAGgIAcQgDALgBAQIAAAbIgDBPIACAGIACAJQAGAXgZAHIgJABQgNAAgFgLg");
	this.shape_93.setTransform(-32.4,-185.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DA735C").s().p("AgxAMQgHgWAXgGQAUgEAJANQAAgOgDgVQgEgWARgHQAJgEAJADQAKADADAIQAMAaACAbQACAcgKAZQgDAJgGAFQgIAMgPACIgHABQghAAgUg+g");
	this.shape_94.setTransform(-23.4,-155.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DA735C").s().p("AgNDEQgNgLAEgPQAIgcgQAOQgUAWgFAEIgDADIgCADQgKANgPAAQgLAAgHgGQANAIASgKQgIADgHgBQgPAAgKgIQAEAFAFADQgGgDgFgIIgFgGQgKgNgCgWQgBgNALgGIACgFIADgEIAAgGQACgYAZAAQASAAAEAMQgDgNADgQIASg9IA5i/QAGgUAVADQAVADABAVIAAAKQAKAFADAKQAHAYgEAdIgCANQAPAHgDAUIgCAMQAEADADAFQALATgCAgIAAAAQAJASgCAXQAHAEACALQAHAkALAmQAHAYgYAGQgYAHgHgYIgFgPQgGACgIgCIgEgBQgEADgFABIgCAPQgCAUgSAEQgGAJgJAHQgGAFgHAAQgGAAgIgHg");
	this.shape_95.setTransform(-34.8,-170.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DA735C").s().p("AAODNQgXgBAAgZQAAgZAXABQAKABgNgxIgPg0QgKgfgKgnQgKgpgIgoIgFglQgEgXgIgLQgOgUAVgMQAWgNAOAUQANASAFAjIAJA5QAQBMAWBBQARA2AAAkQgBA4gvAAIgEAAg");
	this.shape_96.setTransform(-25.5,-172.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DA735C").s().p("AhaDPQgYgHAHgXIBek3IAOgvQAMgZAYgCQAjgCAgAvQAOAUgWANQgWANgNgUQgNgTgIAQQgEAIgEATIhbEwQgFASgQAAIgKgCg");
	this.shape_97.setTransform(-36.8,-174.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DA735C").s().p("AgKDlQgIgGgHgaQgGgZgHgDQgCgBgaAJQgbAKgIgCQgOgEgJgKQgHgJgGgQQgDgHAEgJQADgIAHgEIAUgLIADgCQAshnAZhvQAGgzAJgcQAPgyAkACQAWACAOAgQAKAXAGApIALBCIAbCFIAMA0QAIAfgDAUQgEAggaAGQgbAHgSgcIgHgKQgDAJgDARQgFAOgEAHQgGALgKAEQgIAEgHAAQgLAAgKgIgAgHB/QAIAHAHAMIADAIIAGgQQAIgTAPgHQASgIATAMIAGAFQAIArACgTQABgOgLgKIgCgIIgujmQgEghgGgOQgBgCAAgCQAAgBgBAAQAAgBAAAAQAAAAAAABIABASQgGBIgdBZQgSAygbBAIAPgFIAHgBQAPAAAMAJg");
	this.shape_98.setTransform(-33.9,-170.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3A3635").s().p("AkEDxQhpiCh/jJQAugUBbgUIjKgrID7kfIAMBpQASCCAdB7QBdGICoCrQBBiABfmUIBTl7IEtDIIjEAUIBbBIIgwBgQg7Byg5BhQi2E0hdAEIgDAAQheAAixjcg");
	this.shape_99.setTransform(-31.2,-23.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EDEDED").s().p("Ag3B/Qg8g1gWg2QBQgiBRhRIBDhKIAuAlQAFATgMAQIiCELQgYgQgfgbg");
	this.shape_100.setTransform(-19.1,-57.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EDEDED").s().p("AiKhhQgIgLADgNIAug0IBHBPQBXBVBUAhQgXA2g9A2QgeAagaARg");
	this.shape_101.setTransform(-47.4,-57.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#23284F").s().p("AhcgHIAmgWIB/AeIAUAdg");
	this.shape_102.setTransform(-32,-46.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#23284F").s().p("AhhAUIDChBIACAcIjFA/g");
	this.shape_103.setTransform(-30.7,9.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#23284F").s().p("AhjAVIDGhDIACAdIjJBAg");
	this.shape_104.setTransform(-32.1,-4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#23284F").s().p("AhdAWIC6hFIACAdIi+BCg");
	this.shape_105.setTransform(-32.2,-14.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1C1A34").s().p("Ag2BGQgdgFgcgLIgWgJIBBh2IBEAAIAeAJQAlAMAYANQBQAqhDAqQgvAdg8AAQgYAAgbgEg");
	this.shape_106.setTransform(-31.1,-47.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#23284F").s().p("AhXAVICuhDIACAdIixBAg");
	this.shape_107.setTransform(-32.4,-28.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#23284F").s().p("AhPAKIBMgeIBVgPIAAAFIijBCg");
	this.shape_108.setTransform(-32.5,-38.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1C1A34").s().p("AhtC/IAZoMICdAAIAkItIhcBug");
	this.shape_109.setTransform(-31.7,-10.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DDDDDD").s().p("AjHDpIhglQIgmkgIAbgqIAhggIEMCSIEIiLIBLBzIifJAIiWDpg");
	this.shape_110.setTransform(-32.3,-23.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#191919").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_111.setTransform(-29.9,121.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#191919").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_112.setTransform(-30.6,98.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#191919").s().p("AgWAXQgJgKAAgNQAAgNAJgIQAKgKAMAAQANAAAKAKQAJAIAAANQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_113.setTransform(-30.6,75.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#232222").s().p("A0KWnIg09mIK2nNIEqEDIE4j7IKUFVICCCEIDpwBIFmCOIgQCQQgXCzgfCrQhlImiWESQg9ArkfgRIkTgZQgCAABFJaIBFJaIsFDCQgTAAgOgMQgOgNgCgSIgZjHIgbC/QgDAWgQAPQgRAOgXABIojABIAkz+Ig/Uqg");
	this.shape_114.setTransform(2.2,24.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C9846F").s().p("AhdDJQgPhfgLhZIgJhFIA+jEICRgUIAdB6QAbCGgIA4QgIA4gjhjIghhuIgnAyQgmBCgIBUQADAYgKBZIgRA4QgFAJgFAAQgNAAgMhEg");
	this.shape_115.setTransform(-111.7,192.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DA735C").s().p("AgHAmIgkglIAPhBIBIB/QgDACgEAAQgPAAgdgbg");
	this.shape_116.setTransform(-110.8,200.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DA735C").s().p("AgJAmIgkgmIAQhAIArA6QAqA8gOAJQgDACgEAAQgPAAgdgbg");
	this.shape_117.setTransform(-112.9,206.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#191919").s().p("Ak6gxIgZJPIpygZIgzvkIR6huIN3IZIjoKCg");
	this.shape_118.setTransform(15.8,191.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C9846F").s().p("Ak2OuQiehDh6h6Qh6h6hDieQhFijAAizIAAoKQAAj/C2i3QC2i2EAAAIHJAAQEAAAC2C2QC2C3AAD/IAAJJQAACmhACYQg/CShxByQhxBxiTA+QiYBBimAAQixAAikhGg");
	this.shape_119.setTransform(-33.2,-182.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#DA735C").s().p("Ah8CtQg3gRgogeIAAhRIABgPQgBgHgFgHQgGgTgPgOQgPgQgTgGIgDgCQAVhBBOgqQBOgqBnAAQB2AABTA4QBVA4AABOIAAADQgeAOgKAJQgRANAAAWIAAA1QgnAkg8AVQg8AUhGAAQhAABg6gTg");
	this.shape_120.setTransform(-33.5,-89.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C9846F").s().p("AjfITIAAwlIG/AAIAAQlg");
	this.shape_121.setTransform(-33.2,-73.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#191919").s().p("AkEJvQh+g1gNjcQgNjcBskBQBrkCCmiRQCmiQB+A1QAXAKAUAPQBVBFALCyQALCxhDDIQgRAxgVAzQhsECimCRQh5BqhkAAQglAAgigOg");
	this.shape_122.setTransform(87.7,246.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,-310,273.1,620.1);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9846F").s().p("AiDBBQg4gbAAgmQAAglA4gbQA3gbBMAAQBOAAA3AbQA2AbAAAlQAAAmg2AbQg3AbhOAAQhMAAg3gbg");
	this.shape.setTransform(-31,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA735C").s().p("AiDBSQg4giAAgwQAAgvA4giQA3giBMAAQBOAAA3AiQA2AiAAAvQAAAwg2AiQg3AihOAAQhMAAg3gig");
	this.shape_1.setTransform(-31,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9846F").s().p("AiDBBQg4gbAAgmQAAglA4gbQA3gbBMAAQBOAAA3AbQA2AbAAAlQAAAmg2AbQg3AbhOAAQhMAAg3gbg");
	this.shape_2.setTransform(38.7,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA735C").s().p("AiDBSQg4giAAgwQAAgvA4giQA3giBMAAQBOAAA3AiQA2AiAAAvQAAAwg2AiQg3AihOAAQhMAAg3gig");
	this.shape_3.setTransform(38.7,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363030").s().p("ACoAqQhMg4hfAAQhdAAhRA1QgPAKgWgFQgVgFAWgPQBlhCB1gDQB8gDBdBEQALAJgaALQgQAGgKAAQgIAAgFgEg");
	this.shape_4.setTransform(-30,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#363030").s().p("AjOAnQgWgLAGgFQBWhMCEALQBvAJBsBAQASALgSAAQgSgBgKgGQhZg1hhgCQhpgChJBBQgDACgFAAQgHAAgOgGg");
	this.shape_5.setTransform(37.4,-9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C9846F").s().p("AogEQQhDgzghgxIgQgaQAHg/AIg1QAHgvAVhgQAbgHAVgTQAXgWAtgTIBKggQBUgoBkgJQDjgTDfAOICZAJQBfAMAtAmQAWAUAiApQAhAjAmAJIALACIAPBKQAIArAAAgQgCBdgpBMQjlAai6AMIgYgdQgIgLgHgSIgLghQgBg0gngbQgkgZguAHQgwAGggAsQgHAJgMAVQgLAUgHAKQgQAUgkAmQgMAPgJAVIgDAAIisABIjSgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-27.3,132.2,54.7);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9846F").s().p("AiDBBQg4gbAAgmQAAglA4gbQA3gbBMAAQBOAAA3AbQA2AbAAAlQAAAmg2AbQg3AbhOAAQhMAAg3gbg");
	this.shape.setTransform(-31,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA735C").s().p("AiDBSQg4giAAgwQAAgvA4giQA3giBMAAQBOAAA3AiQA2AiAAAvQAAAwg2AiQg3AihOAAQhMAAg3gig");
	this.shape_1.setTransform(-31,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9846F").s().p("AiDBBQg4gbAAgmQAAglA4gbQA3gbBMAAQBOAAA3AbQA2AbAAAlQAAAmg2AbQg3AbhOAAQhMAAg3gbg");
	this.shape_2.setTransform(38.7,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA735C").s().p("AiDBSQg4giAAgwQAAgvA4giQA3giBMAAQBOAAA3AiQA2AiAAAvQAAAwg2AiQg3AihOAAQhMAAg3gig");
	this.shape_3.setTransform(38.7,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363030").s().p("ACoAqQhMg4hfAAQhdAAhRA1QgPAKgWgFQgVgFAWgPQBlhCB1gDQB8gDBdBEQALAJgaALQgQAGgKAAQgIAAgFgEg");
	this.shape_4.setTransform(-30,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#363030").s().p("AjOAnQgWgLAGgFQBWhMCEALQBvAJBsBAQASALgSAAQgSgBgKgGQhZg1hhgCQhpgChJBBQgDACgFAAQgHAAgOgGg");
	this.shape_5.setTransform(37.4,-9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C9846F").s().p("AogEQQhDgzghgxIgQgaQAHg/AIg1QAHgvAVhgQAbgHAVgTQAXgWAtgTIBKggQBUgoBkgJQDjgTDfAOICZAJQBfAMAtAmQAWAUAiApQAhAjAmAJIALACIAPBKQAIArAAAgQgCBdgpBMQjlAai6AMIgYgdQgIgLgHgSIgLghQgBg0gngbQgkgZguAHQgwAGggAsQgHAJgMAVQgLAUgHAKQgQAUgkAmQgMAPgJAVIgDAAIisABIjSgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-27.3,132.2,54.7);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8F").s().p("AhiF6QgmhDgfhdIgYhPQgWiTgKicQgTk2BAgjQBAgjAwEKQAYCEALCMIA9AuQBHA7AwA7QCYC+iLB6QgzAsgwAAQhUAAhNiIg");
	this.shape.setTransform(-13.3,-1.2,0.409,0.409,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA725C").s().p("Aj2NLQhEgSg1gjIgoggIAA2pIAMgOQAPgPASgLQA6gjBAAdQAeBOAPGhQAFCeADCUIAFkvQAHmtAPieQA4guAdASQAHAEAKANQAIAJAEgBQAxgOAXHSQAGCGAECGQgClBAEifQA1h5BPAxQAoAYAdAwIAIMhQARjUgCiPQAVhWA8AiQAeASAaAiIAHByQAGCMgIB+QgWGUiPB1QjCBmikAAQhCAAg9gRg");
	this.shape_1.setTransform(5,-10.3,0.409,0.409,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B56556").s().p("AkuFKIAAqTIJdAAIAAKTg");
	this.shape_2.setTransform(-2.2,30.9,0.409,0.409,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-45.7,43.7,91.5);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8F").s().p("AhiF6QgmhDgfhdIgYhPQgWiTgKicQgTk2BAgjQBAgjAwEKQAYCEALCMIA9AuQBHA7AwA7QCYC+iLB6QgzAsgwAAQhUAAhNiIg");
	this.shape.setTransform(-13.2,-4.8,0.409,0.409,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA725C").s().p("Aj2NLQhEgSg1gjIgoggIAA2pIAMgOQAPgPASgLQA6gjBAAdQAeBOAPGhQAFCeADCUIAFkvQAHmtAPieQA4guAdASQAHAEAKANQAIAJAEgBQAxgOAXHSQAGCGAECGQgClBAEifQA1h5BPAxQAoAYAdAwIAIMhQARjUgCiPQAVhWA8AiQAeASAaAiIAHByQAGCMgIB+QgWGUiPB1QjCBmikAAQhCAAg9gRg");
	this.shape_1.setTransform(6.5,-10.5,0.409,0.409,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B56556").s().p("AkuFKIAAqTIJdAAIAAKTg");
	this.shape_2.setTransform(-8,28.9,0.409,0.409,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-45.3,47.5,90.7);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8F").s().p("AhiF6QgmhDgfhdIgYhPQgWiTgKicQgTk2BAgjQBAgjAwEKQAYCEALCMIA9AuQBHA7AwA7QCYC+iLB6QgzAsgwAAQhUAAhNiIg");
	this.shape.setTransform(-13.3,-1.2,0.409,0.409,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA725C").s().p("Aj2NLQhEgSg1gjIgoggIAA2pIAMgOQAPgPASgLQA6gjBAAdQAeBOAPGhQAFCeADCUIAFkvQAHmtAPieQA4guAdASQAHAEAKANQAIAJAEgBQAxgOAXHSQAGCGAECGQgClBAEifQA1h5BPAxQAoAYAdAwIAIMhQARjUgCiPQAVhWA8AiQAeASAaAiIAHByQAGCMgIB+QgWGUiPB1QjCBmikAAQhCAAg9gRg");
	this.shape_1.setTransform(5,-10.3,0.409,0.409,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B56556").s().p("AkuFKIAAqTIJdAAIAAKTg");
	this.shape_2.setTransform(-2.2,30.9,0.409,0.409,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-45.7,43.7,91.5);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8F").s().p("AhiF6QgmhDgfhdIgYhPQgWiTgKicQgTk2BAgjQBAgjAwEKQAYCEALCMIA9AuQBHA7AwA7QCYC+iLB6QgzAsgwAAQhUAAhNiIg");
	this.shape.setTransform(-13.2,-4.8,0.409,0.409,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA725C").s().p("Aj2NLQhEgSg1gjIgoggIAA2pIAMgOQAPgPASgLQA6gjBAAdQAeBOAPGhQAFCeADCUIAFkvQAHmtAPieQA4guAdASQAHAEAKANQAIAJAEgBQAxgOAXHSQAGCGAECGQgClBAEifQA1h5BPAxQAoAYAdAwIAIMhQARjUgCiPQAVhWA8AiQAeASAaAiIAHByQAGCMgIB+QgWGUiPB1QjCBmikAAQhCAAg9gRg");
	this.shape_1.setTransform(6.5,-10.5,0.409,0.409,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B56556").s().p("AkuFKIAAqTIJdAAIAAKTg");
	this.shape_2.setTransform(-8,28.9,0.409,0.409,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-45.3,47.5,90.7);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8F").s().p("AhiF6QgmhDgfhdIgYhPQgWiTgKicQgTk2BAgjQBAgjAwEKQAYCEALCMIA9AuQBHA7AwA7QCYC+iLB6QgzAsgwAAQhUAAhNiIg");
	this.shape.setTransform(-12.3,1.1,0.409,0.409);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA725C").s().p("Aj2NLQhEgSg1gjIgoggIAA2pIAMgOQAPgPASgLQA6gjBAAdQAeBOAPGhQAFCeADCUIAFkvQAHmtAPieQA4guAdASQAHAEAKANQAIAJAEgBQAxgOAXHSQAGCGAECGQgClBAEifQA1h5BPAxQAoAYAdAwIAIMhQARjUgCiPQAVhWA8AiQAeASAaAiIAHByQAGCMgIB+QgWGUiPB1QjCBmikAAQhCAAg9gRg");
	this.shape_1.setTransform(4.9,-10.1,0.409,0.409);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B56556").s().p("AkuFKIAAqTIJdAAIAAKTg");
	this.shape_2.setTransform(2.4,31.8,0.409,0.409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-45.2,43.2,90.5);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("Ai2MBQhShOAAhzQAAhqBIhJQBRhUB1AAQBqAABMBOQBMBPAABpQAABshOBQQhPBOhrAAQhqAAhMhIgAiOAQQhCh3gmiJQgniJAAhxQAAiLA/heQBNh1CRAAQBtAABLBOQBmBnAAC7QAAB9grCQQgsCPhIBvQhSB/gxAAQgxAAhZiig");
	this.shape.setTransform(281.5,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AmLMzQiYghAAhiQAAhLBdghQBGgZARglQAnhVAAk5QAAhigUg1QgTg3hChWQiKi0iSiQQhAg+g6gWIhlgtQgigeAAgwQAAhSB8gkQB7gkEhAAQDvAAB+AZQA6ALAiAhQAiAgAAAqQAAAfgbAhQgmAyAAAWQAAAsBFBhQAtA+AoAAQAaAAAYgSIBAhFQAvg7AAgkIgFghIgog0QgYgcAAgwQAAiKF1AAQDTAABAAUQAoAMAbAiQAaAiAAAnQAAAygfAaQgeAahMANQhGANgzApQgzAniJCSQimC0goBVQgqBUAACoIALEGQAGBLASAdQARAcA1AcQBZAvAABFQAACmnpAAQjKAAizgng");
	this.shape_1.setTransform(145.5,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AIkNfQhOgPiDgEIwKAAQg+AAgigbQgjgcAAgyQAAgjAPgQIBEgoQAkgQATgXQAQgYAKgtQAoi4AAk5QAAnWg6h7IgbgiIg9gXQhGgVAAhIQAAgnAYgfQAXgeAlgKQAwgLCJAAIJzAAIEWgHQBXgJBSgYIApgIQA/AAAxBFQBQBvAACdQAABQggAuQgjAtg6AAQgoAAgXgQIg8hKQg2hShSgbQhTgci8AAQiLAAgfAyQgQAbgCAtIgEDnQAABJAZASQAYASBnAAQAzAAAXgVQAXgWAHg3IAShhQAJgaAYgUQAZgWAjAAQAyAAAjAwQAZAjATBaQARBaAABhQAADAg7B7QgiBEhDAAQgpAAgQgVQgQgWgJhDQgSiKiPAAQg2AAgTAjQgVAiAABeIAJCVIAQB4QAKAkAyAPQAyAOB2AAQC3AABdgvQBdgvA6h8QAjhHAbgYQAbgYAsAAQAzAAAjAtQAgAsAABDQABBJgmBuQgmBug3BVIguA4QgTAOgbAAg");
	this.shape_2.setTransform(-37.5,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("ACiMwQhegnAAhSQAAhFBIgoIAwgnIAZhIQAWhmAAiVQAAhNgWgSQgXgThfAAQjaAAg7AZQgZAKgGAvIgICQQAACLAoA9IA/AyQA0AeAABDQAABVh3AtQh2AujcAAQjJAAh/gqQg2gSgfghQgggiAAgpQABgoATgWQAUgWBBgiQAigRAQgbQANgbAHg/QATiPAAjnIgChkIgFlPQABhpgSghQgUgihQgoQg1gagBgzQAAh7DwgwQCKgcCTAAQF9AAAACeQAAAqgTAbQgUAbg3AhQgwAdgLAwQgOAwAACRQAABVAgAUIA3AOICuADQB+AAAfgOQAegNAAg2QAAihgOg/QgPhAgrgXIhHgzQgRgWAAgkQAAgyAmgoQAmgpA9gPQB/gfC/AAQDhAABsAqQBqAoAABXQgBBJhLAlQgwAWgOAUQgPAUgIA3QgGAegHDxIgHF9QAAD4ATBDIAVAxIBNAxQAvAZAAA1QgBBchtArQhvAqj4AAQjaAAhngrg");
	this.shape_3.setTransform(-224.9,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-327.1,-145.3,654.3,290.8);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AiRJnQhCg+AAhcQAAhVA6g6QBAhEBeAAQBVAAA9BAQA8A+AABUQAABXg+BAQg/A+hWAAQhVAAg8g6gAhxAMQg1hegehuQgghsABhcQAAhvAxhLQA+heB0AAQBXAAA9A/QBRBRAACXQgBBkghBzQgjByg7BZQhBBlgnABQgnAAhHiDg");
	this.shape.setTransform(196.8,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("Ak8KQQh5gbAAhOQAAg9BKgaQA4gTAOgfQAfhEAAj6QAAhPgQgqQgPgrg1hFQhuiQh2hzQgygzgvgRIhQgkQgcgYAAgnQAAhBBjgcQBjgdDnAAQC/AABlAUQAuAJAbAaQAcAaAAAgQAAAagWAaQgeApAAARQAAAkA2BMQAlAyAgAAQAUAAAUgOIAzg3QAmgwAAgdIgEgaIgggpQgUgXAAgmQAAhvErABQCpAAAzAPQAgAKAVAbQAVAbAAAgQAAAogZAVQgYAUg9AKQg3AMgpAfQgpAghuB1QiECQghBEQghBEAACFIAJDSQAFA8ANAXQAOAWArAXQBHAlAAA3QAACFmHAAQihAAiQgeg");
	this.shape_1.setTransform(88,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AG2KyQg+gMhogDIs8AAQgxAAgcgVQgbgXAAgoQAAgcAMgNIA1ggQAegNAOgSQAOgTAIgkQAgiTAAj6QAAl4gvhjIgVgbIgxgTQg4gQAAg6QAAgfATgZQASgYAfgIQAmgJBtAAIH1AAIDfgGQBFgGBCgUIAhgGQAyAAAnA3QBBBZAAB+QAAA/gbAlQgbAkgvAAQggAAgSgMIgwg8QgrhBhCgWQhCgWiXAAQhvAAgYAoQgNAVgCAkIgDC5QAAA7AUAOQATAOBSAAQApAAATgRQASgRAFgsIAPhNQAHgWATgPQAVgSAbAAQAoAAAcAmQAVAcAPBJQANBHAABOQAACZgwBjQgaA2g2AAQghAAgNgRQgMgSgHg1QgPhvhyAAQgrAAgQAdQgQAbAABLIAHB3IAMBgQAIAdApAMQAnALBfAAQCSAABLglQBKgmAvhjQAbg5AXgTQAVgUAjAAQApAAAcAkQAaAkAAA1QAAA7geBYQgfBYgsBEIglAtQgOALgXAAg");
	this.shape_2.setTransform(-58.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("ACBKNQhLgfAAhCQAAg3A6gfIAnggIATg5QAShSAAh4QAAg+gSgOQgSgPhMAAQiuAAgwAUQgTAHgFAnIgGBzQAABvAfAxIAzApQApAWAAA2QAABFhfAkQhfAkivAAQihAAhlghQgsgPgYgaQgagbAAghQAAggAQgSQAPgRA1gcQAbgNAMgWQALgVAGgzQAOhyAAi5IgBhQIgDkMQABhUgPgaQgQgbhAggQgrgVAAgpQAAhjC/glQBwgXB1AAQEwAAAAB+QAAAigPAVQgQAWgsAbQgmAXgKAmQgKAmAAB1QAABEAZAQIAtALICLACQBkAAAZgLQAYgLAAgrQAAiAgMgzQgLgzgjgSIg4gqQgOgRAAgcQAAgpAegfQAfgiAwgLQBmgZCZAAQC0AABWAhQBVAhAABFQAAA7g9AdQgmARgLARQgMAPgHAsQgEAZgGDAIgGExQAADGAPA2IASAnIA9AnQAlAUAAArQAABJhYAjQhZAhjGAAQiuAAhTgig");
	this.shape_3.setTransform(-208.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.5,-116.7,581,233.4);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339FC4").s().p("AiRJnQhCg+AAhcQAAhVA6g6QBAhEBeAAQBVAAA9BAQA8A+AABUQAABXg+BAQg/A+hWAAQhVAAg8g6gAhxAMQg1hegehuQgghsABhcQAAhvAxhLQA+heB0AAQBXAAA9A/QBRBRAACXQgBBkghBzQgjByg7BZQhBBlgnABQgnAAhHiDg");
	this.shape.setTransform(196.8,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339FC4").s().p("Ak8KQQh5gbAAhOQAAg9BKgaQA4gTAOgfQAfhEAAj6QAAhPgQgqQgPgrg1hFQhuiQh2hzQgygzgvgRIhQgkQgcgYAAgnQAAhBBjgcQBjgdDnAAQC/AABlAUQAuAJAbAaQAcAaAAAgQAAAagWAaQgeApAAARQAAAkA2BMQAlAyAgAAQAUAAAUgOIAzg3QAmgwAAgdIgEgaIgggpQgUgXAAgmQAAhvErABQCpAAAzAPQAgAKAVAbQAVAbAAAgQAAAogZAVQgYAUg9AKQg3AMgpAfQgpAghuB1QiECQghBEQghBEAACFIAJDSQAFA8ANAXQAOAWArAXQBHAlAAA3QAACFmHAAQihAAiQgeg");
	this.shape_1.setTransform(88,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339FC4").s().p("AG2KyQg+gMhogDIs8AAQgxAAgcgVQgbgXAAgoQAAgcAMgNIA1ggQAegNAOgSQAOgTAIgkQAgiTAAj6QAAl4gvhjIgVgbIgxgTQg4gQAAg6QAAgfATgZQASgYAfgIQAmgJBtAAIH1AAIDfgGQBFgGBCgUIAhgGQAyAAAnA3QBBBZAAB+QAAA/gbAlQgbAkgvAAQggAAgSgMIgwg8QgrhBhCgWQhCgWiXAAQhvAAgYAoQgNAVgCAkIgDC5QAAA7AUAOQATAOBSAAQApAAATgRQASgRAFgsIAPhNQAHgWATgPQAVgSAbAAQAoAAAcAmQAVAcAPBJQANBHAABOQAACZgwBjQgaA2g2AAQghAAgNgRQgMgSgHg1QgPhvhyAAQgrAAgQAdQgQAbAABLIAHB3IAMBgQAIAdApAMQAnALBfAAQCSAABLglQBKgmAvhjQAbg5AXgTQAVgUAjAAQApAAAcAkQAaAkAAA1QAAA7geBYQgfBYgsBEIglAtQgOALgXAAg");
	this.shape_2.setTransform(-58.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339FC4").s().p("ACBKNQhLgfAAhCQAAg3A6gfIAnggIATg5QAShSAAh4QAAg+gSgOQgSgPhMAAQiuAAgwAUQgTAHgFAnIgGBzQAABvAfAxIAzApQApAWAAA2QAABFhfAkQhfAkivAAQihAAhlghQgsgPgYgaQgagbAAghQAAggAQgSQAPgRA1gcQAbgNAMgWQALgVAGgzQAOhyAAi5IgBhQIgDkMQABhUgPgaQgQgbhAggQgrgVAAgpQAAhjC/glQBwgXB1AAQEwAAAAB+QAAAigPAVQgQAWgsAbQgmAXgKAmQgKAmAAB1QAABEAZAQIAtALICLACQBkAAAZgLQAYgLAAgrQAAiAgMgzQgLgzgjgSIg4gqQgOgRAAgcQAAgpAegfQAfgiAwgLQBmgZCZAAQC0AABWAhQBVAhAABFQAAA7g9AdQgmARgLARQgMAPgHAsQgEAZgGDAIgGExQAADGAPA2IASAnIA9AnQAlAUAAArQAABJhYAjQhZAhjGAAQiuAAhTgig");
	this.shape_3.setTransform(-208.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.5,-116.7,581,233.4);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339FC4").s().p("AiyLxQhQhMAAhxQAAhoBGhHQBPhTBzAAQBoAABKBOQBLBMgBBnQAABrhMBNQhMBNhqAAQhoAAhKhHgAiLAPQhAh0gliGQgniGAAhvQAAiIA9hdQBLhyCPAAQBqAABLBMQBjBlAAC4QAAB6gqCNQgrCMhGBtQhRB8gwAAQgwAAhXifg");
	this.shape.setTransform(277.4,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339FC4").s().p("AmDMjQiVggAAhhQAAhJBbghQBFgYAQglQAnhSAAk0QAAhggUgzQgTg2hAhVQiHiwiQiNQg+g9g6gWIhigsQghgdAAgvQAAhRB5giQB4gkEcAAQDqAAB8AZQA4ALAiAgQAhAfAAApQAAAfgaAhQgmAwAAAWQAAArBEBfQAsA8AnABQAZAAAYgSIA/hEQAug6AAgjIgFggIgng0QgYgbAAgvQAAiHFuAAQDPAAA+ATQAoAMAaAhQAZAiAAAmQAAAygeAZQgeAZhKANQhEANgyAoQgyAmiGCQQijCwgoBTQgoBSAACkIAKECQAGBJARAcQARAcA1AbQBXAuAABEQAACjngAAQjFAAiwgmg");
	this.shape_1.setTransform(144.1,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339FC4").s().p("AIZNNQhNgOiAgEIv1AAQg9AAghgaQgigcAAgxQAAgiAOgQIBCgnQAkgQASgXQARgWAJgtQAoi0AAkzQAAnMg6h5IgagiIg8gWQhEgVAAhGQAAgnAXgdQAXgeAlgKQAugLCGAAIJmAAIERgHQBVgIBRgYIAogHQA+AAAwBDQBPBtAACaQAABOghAtQghAsg6AAQgnAAgWgPIg7hJQg1hQhQgbQhSgbi4AAQiIAAgeAxQgQAagCAsIgEDjQAABHAYASQAYARBlAAQAyAAAXgUQAWgWAGg2IASheQAJgbAYgTQAZgVAhAAQAxAAAjAuQAZAjASBZQARBXAABgQAAC8g7B5QggBBhCAAQgpAAgPgUQgQgWgIhBQgSiIiMAAQg1AAgTAjQgUAiAABcIAICSIAQB1QAJAkAzAOQAwANB0AAQCzAABbgtQBbgvA5h5QAihFAbgYQAbgYArAAQAyAAAhAsQAhAsAABBQAABIglBsQglBrg2BUIguA3QgSANgbAAg");
	this.shape_2.setTransform(-35.2,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339FC4").s().p("ACeMgQhcgmAAhRQAAhEBHgmIAwgmIAYhHQAVhkAAiSQAAhMgVgSQgXgShdAAQjWAAg6AYQgYAKgGAvIgHCNQAACIAmA8IA+AxQAyAdAABBQAABUh0AsQh0AtjXAAQjEAAh9gpQg1gSgeggQgfgiAAgnQAAgoATgVQATgWBAghQAigRAOgaQANgbAIg+QASiMAAjiIgChiIgElIQABhngSggQgTgihPgnQg1gZAAgzQAAh4DrgvQCIgcCQAAQF1AAAACbQAAAqgTAaQgUAag1AhQgvAcgMAvQgNAvAACOQAABUAfATIA3AOICqADQB7AAAegOQAegNAAg0QAAiegOg+QgPg/gpgWIhGgzQgRgVAAgjQAAgxAlgnQAmgpA7gOQB9geC8AAQDcAABpAoQBoAoAABVQAABIhKAjQgvAWgOAUQgOATgJA2QgFAegHDsIgHF1QAADzASBCIAVAwIBMAwQAtAZAAAzQAABbhrAqQhtApjzAAQjVAAhmgqg");
	this.shape_3.setTransform(-218.9,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319,-142.5,638.1,285);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339FC4").s().p("AiRJnQhCg+AAhcQAAhVA6g6QBAhEBeAAQBVAAA9BAQA8A+AABUQAABXg+BAQg/A+hWAAQhVAAg8g6gAhxAMQg1hegehuQgghsABhcQAAhvAxhLQA+heB0AAQBXAAA9A/QBRBRAACXQgBBkghBzQgjByg7BZQhBBlgnABQgnAAhHiDg");
	this.shape.setTransform(196.8,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339FC4").s().p("Ak8KQQh5gbAAhOQAAg9BKgaQA4gTAOgfQAfhEAAj6QAAhPgQgqQgPgrg1hFQhuiQh2hzQgygzgvgRIhQgkQgcgYAAgnQAAhBBjgcQBjgdDnAAQC/AABlAUQAuAJAbAaQAcAaAAAgQAAAagWAaQgeApAAARQAAAkA2BMQAlAyAgAAQAUAAAUgOIAzg3QAmgwAAgdIgEgaIgggpQgUgXAAgmQAAhvErABQCpAAAzAPQAgAKAVAbQAVAbAAAgQAAAogZAVQgYAUg9AKQg3AMgpAfQgpAghuB1QiECQghBEQghBEAACFIAJDSQAFA8ANAXQAOAWArAXQBHAlAAA3QAACFmHAAQihAAiQgeg");
	this.shape_1.setTransform(88,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339FC4").s().p("AG2KyQg+gMhogDIs8AAQgxAAgcgVQgbgXAAgoQAAgcAMgNIA1ggQAegNAOgSQAOgTAIgkQAgiTAAj6QAAl4gvhjIgVgbIgxgTQg4gQAAg6QAAgfATgZQASgYAfgIQAmgJBtAAIH1AAIDfgGQBFgGBCgUIAhgGQAyAAAnA3QBBBZAAB+QAAA/gbAlQgbAkgvAAQggAAgSgMIgwg8QgrhBhCgWQhCgWiXAAQhvAAgYAoQgNAVgCAkIgDC5QAAA7AUAOQATAOBSAAQApAAATgRQASgRAFgsIAPhNQAHgWATgPQAVgSAbAAQAoAAAcAmQAVAcAPBJQANBHAABOQAACZgwBjQgaA2g2AAQghAAgNgRQgMgSgHg1QgPhvhyAAQgrAAgQAdQgQAbAABLIAHB3IAMBgQAIAdApAMQAnALBfAAQCSAABLglQBKgmAvhjQAbg5AXgTQAVgUAjAAQApAAAcAkQAaAkAAA1QAAA7geBYQgfBYgsBEIglAtQgOALgXAAg");
	this.shape_2.setTransform(-58.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339FC4").s().p("ACBKNQhLgfAAhCQAAg3A6gfIAnggIATg5QAShSAAh4QAAg+gSgOQgSgPhMAAQiuAAgwAUQgTAHgFAnIgGBzQAABvAfAxIAzApQApAWAAA2QAABFhfAkQhfAkivAAQihAAhlghQgsgPgYgaQgagbAAghQAAggAQgSQAPgRA1gcQAbgNAMgWQALgVAGgzQAOhyAAi5IgBhQIgDkMQABhUgPgaQgQgbhAggQgrgVAAgpQAAhjC/glQBwgXB1AAQEwAAAAB+QAAAigPAVQgQAWgsAbQgmAXgKAmQgKAmAAB1QAABEAZAQIAtALICLACQBkAAAZgLQAYgLAAgrQAAiAgMgzQgLgzgjgSIg4gqQgOgRAAgcQAAgpAegfQAfgiAwgLQBmgZCZAAQC0AABWAhQBVAhAABFQAAA7g9AdQgmARgLARQgMAPgHAsQgEAZgGDAIgGExQAADGAPA2IASAnIA9AnQAlAUAAArQAABJhYAjQhZAhjGAAQiuAAhTgig");
	this.shape_3.setTransform(-208.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.5,-116.7,581,233.4);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339FC4").s().p("AiRJnQhCg+AAhcQAAhVA6g6QBAhEBeAAQBVAAA9BAQA8A+AABUQAABXg+BAQg/A+hWAAQhVAAg8g6gAhxAMQg1hegehuQgghsABhcQAAhvAxhLQA+heB0AAQBXAAA9A/QBRBRAACXQgBBkghBzQgjByg7BZQhBBlgnABQgnAAhHiDg");
	this.shape.setTransform(196.8,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339FC4").s().p("Ak8KQQh5gbAAhOQAAg9BKgaQA4gTAOgfQAfhEAAj6QAAhPgQgqQgPgrg1hFQhuiQh2hzQgygzgvgRIhQgkQgcgYAAgnQAAhBBjgcQBjgdDnAAQC/AABlAUQAuAJAbAaQAcAaAAAgQAAAagWAaQgeApAAARQAAAkA2BMQAlAyAgAAQAUAAAUgOIAzg3QAmgwAAgdIgEgaIgggpQgUgXAAgmQAAhvErABQCpAAAzAPQAgAKAVAbQAVAbAAAgQAAAogZAVQgYAUg9AKQg3AMgpAfQgpAghuB1QiECQghBEQghBEAACFIAJDSQAFA8ANAXQAOAWArAXQBHAlAAA3QAACFmHAAQihAAiQgeg");
	this.shape_1.setTransform(88,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339FC4").s().p("AG2KyQg+gMhogDIs8AAQgxAAgcgVQgbgXAAgoQAAgcAMgNIA1ggQAegNAOgSQAOgTAIgkQAgiTAAj6QAAl4gvhjIgVgbIgxgTQg4gQAAg6QAAgfATgZQASgYAfgIQAmgJBtAAIH1AAIDfgGQBFgGBCgUIAhgGQAyAAAnA3QBBBZAAB+QAAA/gbAlQgbAkgvAAQggAAgSgMIgwg8QgrhBhCgWQhCgWiXAAQhvAAgYAoQgNAVgCAkIgDC5QAAA7AUAOQATAOBSAAQApAAATgRQASgRAFgsIAPhNQAHgWATgPQAVgSAbAAQAoAAAcAmQAVAcAPBJQANBHAABOQAACZgwBjQgaA2g2AAQghAAgNgRQgMgSgHg1QgPhvhyAAQgrAAgQAdQgQAbAABLIAHB3IAMBgQAIAdApAMQAnALBfAAQCSAABLglQBKgmAvhjQAbg5AXgTQAVgUAjAAQApAAAcAkQAaAkAAA1QAAA7geBYQgfBYgsBEIglAtQgOALgXAAg");
	this.shape_2.setTransform(-58.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339FC4").s().p("ACBKNQhLgfAAhCQAAg3A6gfIAnggIATg5QAShSAAh4QAAg+gSgOQgSgPhMAAQiuAAgwAUQgTAHgFAnIgGBzQAABvAfAxIAzApQApAWAAA2QAABFhfAkQhfAkivAAQihAAhlghQgsgPgYgaQgagbAAghQAAggAQgSQAPgRA1gcQAbgNAMgWQALgVAGgzQAOhyAAi5IgBhQIgDkMQABhUgPgaQgQgbhAggQgrgVAAgpQAAhjC/glQBwgXB1AAQEwAAAAB+QAAAigPAVQgQAWgsAbQgmAXgKAmQgKAmAAB1QAABEAZAQIAtALICLACQBkAAAZgLQAYgLAAgrQAAiAgMgzQgLgzgjgSIg4gqQgOgRAAgcQAAgpAegfQAfgiAwgLQBmgZCZAAQC0AABWAhQBVAhAABFQAAA7g9AdQgmARgLARQgMAPgHAsQgEAZgGDAIgGExQAADGAPA2IASAnIA9AnQAlAUAAArQAABJhYAjQhZAhjGAAQiuAAhTgig");
	this.shape_3.setTransform(-208.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.5,-116.7,581,233.4);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339FC4").s().p("AiRJnQhCg+AAhcQAAhVA6g6QBAhEBeAAQBVAAA9BAQA8A+AABUQAABXg+BAQg/A+hWAAQhVAAg8g6gAhxAMQg1hegehuQgghsABhcQAAhvAxhLQA+heB0AAQBXAAA9A/QBRBRAACXQgBBkghBzQgjByg7BZQhBBlgnABQgnAAhHiDg");
	this.shape.setTransform(196.8,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339FC4").s().p("Ak8KQQh5gbAAhOQAAg9BKgaQA4gTAOgfQAfhEAAj6QAAhPgQgqQgPgrg1hFQhuiQh2hzQgygzgvgRIhQgkQgcgYAAgnQAAhBBjgcQBjgdDnAAQC/AABlAUQAuAJAbAaQAcAaAAAgQAAAagWAaQgeApAAARQAAAkA2BMQAlAyAgAAQAUAAAUgOIAzg3QAmgwAAgdIgEgaIgggpQgUgXAAgmQAAhvErABQCpAAAzAPQAgAKAVAbQAVAbAAAgQAAAogZAVQgYAUg9AKQg3AMgpAfQgpAghuB1QiECQghBEQghBEAACFIAJDSQAFA8ANAXQAOAWArAXQBHAlAAA3QAACFmHAAQihAAiQgeg");
	this.shape_1.setTransform(88,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339FC4").s().p("AG2KyQg+gMhogDIs8AAQgxAAgcgVQgbgXAAgoQAAgcAMgNIA1ggQAegNAOgSQAOgTAIgkQAgiTAAj6QAAl4gvhjIgVgbIgxgTQg4gQAAg6QAAgfATgZQASgYAfgIQAmgJBtAAIH1AAIDfgGQBFgGBCgUIAhgGQAyAAAnA3QBBBZAAB+QAAA/gbAlQgbAkgvAAQggAAgSgMIgwg8QgrhBhCgWQhCgWiXAAQhvAAgYAoQgNAVgCAkIgDC5QAAA7AUAOQATAOBSAAQApAAATgRQASgRAFgsIAPhNQAHgWATgPQAVgSAbAAQAoAAAcAmQAVAcAPBJQANBHAABOQAACZgwBjQgaA2g2AAQghAAgNgRQgMgSgHg1QgPhvhyAAQgrAAgQAdQgQAbAABLIAHB3IAMBgQAIAdApAMQAnALBfAAQCSAABLglQBKgmAvhjQAbg5AXgTQAVgUAjAAQApAAAcAkQAaAkAAA1QAAA7geBYQgfBYgsBEIglAtQgOALgXAAg");
	this.shape_2.setTransform(-58.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339FC4").s().p("ACBKNQhLgfAAhCQAAg3A6gfIAnggIATg5QAShSAAh4QAAg+gSgOQgSgPhMAAQiuAAgwAUQgTAHgFAnIgGBzQAABvAfAxIAzApQApAWAAA2QAABFhfAkQhfAkivAAQihAAhlghQgsgPgYgaQgagbAAghQAAggAQgSQAPgRA1gcQAbgNAMgWQALgVAGgzQAOhyAAi5IgBhQIgDkMQABhUgPgaQgQgbhAggQgrgVAAgpQAAhjC/glQBwgXB1AAQEwAAAAB+QAAAigPAVQgQAWgsAbQgmAXgKAmQgKAmAAB1QAABEAZAQIAtALICLACQBkAAAZgLQAYgLAAgrQAAiAgMgzQgLgzgjgSIg4gqQgOgRAAgcQAAgpAegfQAfgiAwgLQBmgZCZAAQC0AABWAhQBVAhAABFQAAA7g9AdQgmARgLARQgMAPgHAsQgEAZgGDAIgGExQAADGAPA2IASAnIA9AnQAlAUAAArQAABJhYAjQhZAhjGAAQiuAAhTgig");
	this.shape_3.setTransform(-208.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.5,-116.7,581,233.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339FC4").s().p("AiyLxQhQhMAAhxQAAhoBGhHQBPhTBzAAQBoAABKBOQBKBMAABnQABBrhNBNQhMBNhqAAQhoAAhKhHgAiLAPQhBh0gkiGQgniGAAhvQAAiIA9hdQBLhyCPAAQBqAABLBMQBjBlAAC4QAAB6gqCNQgrCMhHBtQhQB8gwAAQgvAAhYifg");
	this.shape.setTransform(277.2,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339FC4").s().p("AmDMjQiVggAAhhQAAhJBbghQBFgYAQglQAnhSAAk0QAAhggUgzQgTg2hAhVQiHiwiQiNQg+g9g6gWIhigsQghgdAAgvQAAhRB5giQB4gkEcAAQDqAAB8AZQA4ALAiAgQAhAfAAApQAAAfgaAhQgmAwAAAWQAAArBEBfQAsA8AnABQAZAAAYgSIA/hEQAug6AAgjIgFggIgng0QgYgbAAgvQAAiHFuAAQDPAAA+ATQAoAMAaAhQAZAiAAAmQAAAygeAZQgeAZhKANQhEANgyAoQgyAmiGCQQijCwgoBTQgoBSAACkIAKECQAGBJARAcQARAcA1AbQBXAuAABEQAACjngAAQjFAAiwgmg");
	this.shape_1.setTransform(143.9,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339FC4").s().p("AIZNNQhNgOiAgEIv1AAQg9AAghgaQgigcAAgxQAAgiAOgQIBCgnQAkgQASgXQARgWAJgtQAoi0AAkzQAAnMg6h5IgagiIg8gWQhEgVAAhGQAAgnAXgdQAXgeAlgKQAugLCGAAIJmAAIERgHQBVgIBRgYIAogHQA+AAAwBDQBPBtAACaQAABOghAtQghAsg6AAQgnAAgWgPIg7hJQg1hQhQgbQhSgbi4AAQiIAAgeAxQgQAagCAsIgEDjQAABHAYASQAYARBlAAQAyAAAXgUQAWgWAGg2IASheQAJgbAYgTQAZgVAhAAQAxAAAjAuQAZAjASBZQARBXAABgQAAC8g7B5QggBBhCAAQgpAAgPgUQgQgWgIhBQgSiIiMAAQg1AAgTAjQgUAiAABcIAICSIAQB1QAJAkAzAOQAwANB0AAQCzAABbgtQBbgvA5h5QAihFAbgYQAbgYArAAQAyAAAhAsQAhAsAABBQAABIglBsQglBrg2BUIguA3QgSANgbAAg");
	this.shape_2.setTransform(-35.4,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339FC4").s().p("ACeMgQhcgmAAhRQAAhEBHgmIAwgmIAYhHQAVhkAAiSQAAhMgVgSQgXgShdAAQjWAAg6AYQgYAKgGAvIgHCNQAACIAmA8IA+AxQAyAdAABBQAABUh0AsQh0AtjXAAQjEAAh9gpQg1gSgeggQgfgiAAgnQAAgoATgVQATgWBAghQAigRAOgaQANgbAIg+QASiMAAjiIgChiIgElIQABhngSggQgTgihPgnQg1gZAAgzQAAh4DrgvQCIgcCQAAQF1AAAACbQAAAqgTAaQgUAag1AhQgvAcgMAvQgNAvAACOQAABUAfATIA3AOICqADQB7AAAegOQAegNAAg0QAAiegOg+QgPg/gpgWIhGgzQgRgVAAgjQAAgxAlgnQAmgpA7gOQB9geC8AAQDcAABpAoQBoAoAABVQAABIhKAjQgvAWgOAUQgOATgJA2QgFAegHDsIgHF1QAADzASBCIAVAwIBMAwQAtAZAAAzQAABbhrAqQhtApjzAAQjVAAhmgqg");
	this.shape_3.setTransform(-219.1,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.2,-142.5,638.5,285);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape.setTransform(74.7,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DAD4F").s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_1.setTransform(74.7,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020203").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_2.setTransform(8.6,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3DAD4F").s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_3.setTransform(8.6,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,83.3,17.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9892F").s().p("AgxA0QgVgVAAgfQAAgeAVgWQAVgVAcAAQAeAAAUAVQAUAWABAeQgBAfgUAVQgVAWgdAAQgcAAgVgWg");
	this.shape.setTransform(141.2,329.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9892F").s().p("AhcBiQgngpAAg5QAAg4AngpQAmgoA2AAQA2AAAnAoQAnApgBA4QABA5gnApQgnAog2AAQg2AAgmgog");
	this.shape_1.setTransform(103.8,359);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_2.setTransform(113,343.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_3.setTransform(117.3,351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_4.setTransform(128.9,333.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_5.setTransform(133.2,340.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_6.setTransform(143.1,315);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_7.setTransform(150.3,318.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_8.setTransform(151.4,297.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#C9892F").p("Ag5gdIARB2IBjg6IgRh3g");
	this.shape_9.setTransform(158.5,300.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_10.setTransform(159.7,279.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_11.setTransform(166.8,283.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C9892F").p("Ag9g3QADAAAAAAQAFAFAZAKQAZAKADAEQAHAEAVAOQANAIAPAEIhjA6g");
	this.shape_12.setTransform(168.2,264.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#C9892F").p("Ag6g4QAJAIAOAGQAbAKAFADQAGAIAXAJQAZAKAHAGIhjA6g");
	this.shape_13.setTransform(175.3,268.6,1,1,0,0,0,0.1,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9892F").s().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAegUATQgVAVgdAAQgcAAgUgVg");
	this.shape_14.setTransform(67,331.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9892F").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	this.shape_15.setTransform(104,359.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_16.setTransform(94.9,345.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_17.setTransform(90.6,352.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_18.setTransform(79.1,335.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_19.setTransform(74.9,342.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhwg");
	this.shape_20.setTransform(65,318.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_21.setTransform(57.9,321.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_22.setTransform(56.8,301.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C9892F").p("AA6gbIgSBvIhhg3IAQhwg");
	this.shape_23.setTransform(49.7,305);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhwg");
	this.shape_24.setTransform(48.6,284.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_25.setTransform(41.5,288.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#C9892F").p("AAphAQACgBgEABQgEADgQAJQgPAIgEADQgKAGgTASQgRAQgNACIAKAIIBiA2IARhug");
	this.shape_26.setTransform(39.6,270.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C9892F").p("AA0g/QgYAUghAPQgLAOgnAYIBiA3IAShvg");
	this.shape_27.setTransform(33,273.6,1,1,0,0,0,0,0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#363030").s().p("AGxEAQgNhOgcg2QgnhMg8gKQg0gIg3gcQgogTg5goQhDgvgrgXQg+ggg+gMQgrgIhfgKQgvgEgkgGQguAHgtgCQgYgBAAgZQAAgZAYABIAUABIAEgNQACgKAJgFQAKgFAJADIBEAVQAJACAFAHIBJAIQBnAKA4AQQA4APA/AmIBtBJQBKAyAzAPIA1AKQAhAGARANQAtAlAgBFQAaA6AMBEQAEAYgYAHIgKABQgQAAgDgTg");
	this.shape_28.setTransform(140.1,35.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#363030").s().p("AAAD1QgYgHAFgXQAQhTgPiHQgTipABgxQABgZAZAAQAYAAgBAZQgBAyASCuQAPCLgRBWQgEATgPAAIgJgCg");
	this.shape_29.setTransform(187.8,79.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#363030").s().p("AlABnQgSgSAPgSQBOhfCAgPQAOgCAGAKIAGgDIAOgHQgCgFABgHQADgWAWABQAoABA0gJIASgDQAGgEAJAAIAJgBIAxgJQBvgTBJAbQAWAIgGAYQgHAYgXgIQgRgHgUgDQgGAKgQABIg+ABIAHADQAUAHgCAVQgCAUgWAAQhjAAhegXIgMAFIhtA1QhBAfgzgHIgCAAQgTAQgRAVQgIAKgIAAQgIAAgIgJgABkheICNgCQgegDgeAAQgpAAgoAFg");
	this.shape_30.setTransform(117.2,39.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#363030").s().p("AgbCiQgQgGACgRQADgdABgdIgBgIIgRjTQgCgZAZABQAZAAACAYIAHBlQAJAGABAOIAAAHIAAAAQAIgKARAFQAYAGgGAXQgDANAAAfQAAAdgFAOQgFAOgPARIgbAZQgGAGgKAAQgFAAgGgBg");
	this.shape_31.setTransform(187,107.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#363030").s().p("AgaBgIgUhgQgCgQABgJQABgNAKgJIAGgEQgLgJAEgQIgCgHQgIgXAYgGQAXgGAIAWIACAEQARAvASApQAKAVgTALQgOAIgMgIIABADIAKAzQAFAYgYAHIgJABQgPAAgEgSg");
	this.shape_32.setTransform(195.9,96);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#363030").s().p("AAUB+IgLgLQgLgLADgMQgPgigKgiIgIg5QgGgogNgLQgTgOAMgWQANgWATAPQATAOAIAUQAHAQAEAcQAKBOAlBDQALATgRANQgIAGgIAAQgIAAgJgIg");
	this.shape_33.setTransform(188.3,51.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#363030").s().p("AA3FmQgYgHAEgYQAaikhDiaQgFgMAGgMQAFgNAPAAQASABARADIgIgRQgRgjgTgZIgmgnQgXgWgHgWQgEgNALgMQALgLANAFIALAEIhbhnQgQgSASgRQASgSAPASICiC5QALANgJASQgJASgSgIIgOgGQALAPAKAQQAUAhAeBLQAGAQgPAKQgOAJgOgHQgNgGgNgEQA2CXgaCiQgCASgQAAIgKgBg");
	this.shape_34.setTransform(187.5,63.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#363030").s().p("Ag6BPQgJgDgGgJQgGgKAEgJQAQgnAOgPQAGgIAQgJQARgKAGgGIANgXQAJgMANgEQAMgCALAEQANAFAEALQAKAWgWANQgKAGgHgCIgCAFQgDAFgHAHQgFAFgRAKQgOAJgKANQgHAKgIASQgEAKgIAFQgFAEgHAAIgHgBg");
	this.shape_35.setTransform(35,31.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#363030").s().p("AgFAbIgXgTQgIgHABgKQAAgKAHgIQAHgHAKAAQAJAAAIAHIAXAUQAIAGgBALQAAALgHAGQgHAIgKAAQgJAAgIgIg");
	this.shape_36.setTransform(41.8,27.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#363030").s().p("AjXFpQgTigAYiYQAMhOAOgqQAHgTAIgRIgMAEQgSAHgJgSQgJgQAMgOQA4hCBFgxIgMAFQgWALgLgUQgLgUATgOQBFgzBRgVQBSgWBVAKQAYADAAAZQAAAZgYgDQhPgJhLATIgOAEIAGADQAMAGAAAQQAAAPgMAGQhKAkg9A1QALABAHAMQAKASgOAMQgqAkgUBIQgLAmgLBWQgPCAARCMQADAYgZAAQgZAAgDgYg");
	this.shape_37.setTransform(37.4,50.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#363030").s().p("AgXAAQAAgYAXAAQAYAAAAAYQAAAZgYAAQgXAAAAgZg");
	this.shape_38.setTransform(57.5,14.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#363030").s().p("AF8CfQghgjgsghIhqg1Ig4geQgOgDgMgBQgJAHgLAFQgeAOgkgJQgQgEgCgRQgBgJAFgHIAcgDIgBgHQASAEAQgIIAAgBIgVgIQgRAFgPAKQgFAEgDAEQgqAHgpAPQgUAHgJgVIgCgEIgzAMQgSAEgKgQQgJgNAHgKIgIAEQgEACgFABQgPAMgQgQIgFgGQhOAehWAJQgMABgIgKQgIgKAEgMQAHgXANgSQABgEAFgDQAGgIAIgGQAbgWApgFQAHgBAFACQBWgeBagSQARgEALAQQADAGABAEQBcACBYAXQAPAEACARQACANgHAHQgGgIAAAIIAEACIACgCIAAABIAIAHIADABIAEAAIAGABQAPACAGAKIAPAHQBRAlA5AkIAkAZIACABIABABIAAAAQAGADAEAEQAoAfAgAjQARARgSASQgIAJgJAAQgJAAgIgJgAg8hJIAJgCIgFgBg");
	this.shape_39.setTransform(139.4,16.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#363030").s().p("AC9BgQhShNhlgmQgwgTgzgIIBsA4IAgAQQAVAMgNAVQgMAVgWgLIgugYQgfgQgYgKIgBABQgrAgg1gQQgXgHAGgYQADgKAGgEIgMgFQgWgJAGgWIACgHIgIgEQgRgJAGgSQAGgTASgBQB3gGBwAsQBuAqBZBUQASARgSARQgJAJgJAAQgJAAgIgIg");
	this.shape_40.setTransform(155.8,16.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#363030").s().p("AkzBZQgMgVATgNQBXg9BogRQAygPA1gIIgJgRQgIgRANgOQAMgNARAJQBDAmBHAGQACgOAQgGQAfgNAegKQAXgIAHAYQACAIgBAGIAVACQAUABAEAVQAEAVgWAGQhNAThNgJQgsgFgpgQQAAAHgEAGQgGAKgPACIgvAHQgFAOgSAAQghABgfAGQhYAahSAuQgIAEgGAAQgMAAgHgNg");
	this.shape_41.setTransform(68.1,17.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#363030").s().p("AhwBAQgNgQAOgQQAOgRASgPIgjAKQgYAGgGgXQgHgYAXgHQBkgbBjgIQAWgCACAWQAAAHgBAGIAVgEQAYgFAHAZQAGAYgYADQhwAWhgAuQgIAEgGAAQgLAAgHgLg");
	this.shape_42.setTransform(107.7,10.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#363030").s().p("AlrFAQgSjqCki7QCDiVCtgoIgFAAQgSgDAAgVQABgVARgEQAugKBQAQQBWARAngFQAYgDAHAYQAGAYgYADQgoAGhWgRIgSgEQAEAIgDAJQgEASgTABQjVAMiVCuQiTCsAQDWQACAYgZAAQgZAAgCgYg");
	this.shape_43.setTransform(49.6,39.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#363030").s().p("AgWAvQgJgFgCgKQgCgKAEgJQAKgVAHgXQAHgXAXAGQAYAHgHAXQgIAcgOAcQgEAJgKACIgHABQgGAAgGgDg");
	this.shape_44.setTransform(189.6,71.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#363030").s().p("AH7EqQAAiJgLhJIgIgmIgMgQQg+hMgtgrQhMhJhOgXIgkgKQgWgGgOgHIglgVQgMgGgKgBQgMAGgRAAQgSAAgGgTIgBgDIgdAEIgCADQgNAMgRgIIgXAHQgOAFgJgKIgBABQgNAKgOgMQgFgEgCgFIgMAJQgKAHgJAKIAAABIgFAEQgSAMgMgRIgMAHQgQAKgOgOIgEgEQgJARgUgFIgGgCQgKAKgPgGIgFgDQgEACgGAAQgTAGgUACIgMAPQgKAOgQgIIgGgEIgHANQgLASgUgIIgFgDIgJAJQgMALgPgGQgHgDgEgFIgcAfQgLALgRgGQgKgEgEgHIgEABQgKADgJgFIgUgLQgVgMANgWQAMgVATAKQAOgUAUgQQAMgJAQAFQALADADAJIAKgLQAKgLAOAEQALAEAFAJIARgUQAJgNANABIAFgIQAKgQASAFQAJACAEAGIAbgiQAKgOAQAIQAIAFAEAGQANgEAOgDQAJgCAKAEIAJgKQAGgGAJgBQAJgCAHAFIADACQAMgLASAAQAOgBAGANIATgFQAOgDAKAJIADADIAMgEQANgEALAKIABACQAXgLAbgGQAJgCAJAFQAJAFACAKIABADQAkgEAlAEQAPACAGALQADAEAAAFIAUAHQAeALA6AaQBfAcBSBNIAaAZIgDgFQgMgVAVgMQAUgLAOATQAmA1AWBFIARAtIAFAIQBQBvgoBiQgJAUgTgCIgBgBIAAAcQAAAZgZAAQgZAAAAgZgAg6kcIAAACIAZgGIgEgBQgKAAgLAFgAj8kdIABABIACgCIgGgBIADACgAiwkvIACAHQAKgHALgEQgEgCgEAAQgIAAgHAGg");
	this.shape_45.setTransform(131.3,71.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#363030").s().p("ADGCHQgdgqg3giQgegRhJghIjzhsQgWgKANgWQAMgWAWAKIESB7QA7AaAlAbQAwAiAfArQAOAUgWAMQgJAFgHAAQgLAAgJgMg");
	this.shape_46.setTransform(161.1,54.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#363030").s().p("AiKAIQgSgQASgRQASgSARAQQAdAaAaAFQAcAGAigOQAVgJAcgPIAvgcQAVgMAMAVQANAWgVAMQgwAegcAPQgwAbghACIgGAAQgzAAg7g1g");
	this.shape_47.setTransform(75.1,49.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#363030").s().p("AMlF8QgXAAgCgYIAAgQQAEiCgUhgQgah+hGheQhAhXhcg5Qheg6hpgQQhtgQiHAeQgOADjdBAQg0APgnACQgzAEgngRQgQgHgXgTQgagWgNgKQgvgjgmAVQhcAzhUBQQhPBMg+BcQgOATgVgLQgWgNAOgUQBPh1BhhUQAtgnAzgjQAigZASgLQAggUAagFQAngGAoAfIBCA3QAzAfBUgUQAvgLBXghQEdhdDNBFQBmAiBVBGQBVBGA4BdQA3BbAUB5IAFAkQAFhGgEhGQgGi4g9i+QgIgXAYgGQAZgHAHAXQA9C6AIC/QAEBjgJBfIgEArQgDAZgFASQgCAHgPAYQgJAOgCAKIAAAGQgBAYgXAAIgBAAg");
	this.shape_48.setTransform(105.3,83.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#363030").s().p("ADvBnQgRgKgOgNQgFABgHgBQgOgDgGgKIgFgCIgIgGIgBAAQgJAAgGgEQgFACgGAAQgPAAgGgNQgHAFgKABQgGAAgFgDQgHAEgLgDQgLgEgEgHQgGgCgDgDQgIgCgEgFIgBgCIgDAAIgBAAQgGAEgKgCIAAAAIgEAGQgFAJgJACQgJADgKgFIgOgHQgLgFgBgNIAAgBQgHADgKgCIgFgCIgBACQgHAWgWgFQgKAOgRgDQg+gIhCgRQgYgGAHgXQAGgYAYAGIAKACIACgLQADgWADgJQAMgkAcgBQAYgBAMARQAGgQASAAQARABAGAPIAGgBQAPAAAGAJQAFgCAGAAQAHAAAFADIACgDQAIgOARACQASACADAQIABAIIAFABQANAEAFAMIAAAAIAAAAIAAAAQAJgGAKADQAJACAFAHQAEACADACQALAEAFAJQAHgBAGAEQAFgBAGACIAIADQAKgFAMAFQAIACAEAGIAIAAQAHABAFADQAOACAFAPIABACIAGADIADABQAGABAFADIAFAAQAOABAIALQAPAVAWALQAVAMgMAVQgIAOgMAAQgHAAgHgEgACMgPIAAAAIAAAAg");
	this.shape_49.setTransform(129.9,29.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#363030").s().p("AAJAxQgKgDgEgJQgOgbgQgVQgGgIAEgLQADgLAIgFQAJgFAKADQAIADAGAIQASAaAMAXQAEAKgCAJQgCAKgJAFQgGAEgHAAIgGgBg");
	this.shape_50.setTransform(187.6,55.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#363030").s().p("AgEApQgJgBgGgHQgGgHAAgJQAAgRgCgPQAAgKAIgIQAHgHAKAAQAJgBAIAIQAEAFACAGQAIAIgBAJIgFAcQgCAJgIAGQgHADgHAAIgDAAg");
	this.shape_51.setTransform(192.4,79.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#363030").s().p("ACBCyQgNgRgNgyQgzglgrguIAAAAQgLAWgWgLIgDgCQghgRgQghQgIADgKgEQgGgDgEgEQgGADgJgCQgRgDgKgIQgLgHgHgQQgFgKADgKQgcgXAIgaQACgHAEgFIgPgDIgGgBQgVgDADgYQAEgYAUACQAXADA1ADQAvAGAWAVQAMAMAFAPQAzAEAsAWIAOAHQARACARAJQAiAUAIAoIABAEQAWASAPAcQAMAZARBAQAHAXgZAHQgVAGgHgRIACAfQABAUgSADIgIABQgNAAgIgLg");
	this.shape_52.setTransform(169,44);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#363030").s().p("AEiB1Qh4hSioguQhzghjDgdQgYgEAHgYQAHgYAXAEQDGAdB3AiQCrAxB6BTQAUANgMAWQgIANgKAAQgHAAgIgFg");
	this.shape_53.setTransform(152.2,28.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#363030").s().p("AgaCSQgYgHAGgXQAgh0AJh6QACgYAYAAQAZAAgCAYQgJCBgiB6QgEASgQAAIgJgBg");
	this.shape_54.setTransform(192.4,98.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#363030").s().p("AA+CmQgZAAgCgYQgNiVhjhxQgQgSASgSQARgSAQASQBxCAAOCqQACAYgYAAIgBAAg");
	this.shape_55.setTransform(180.8,68.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#363030").s().p("AGaDaQgOgugtgkQgagVg+ghQh6hAhXgfQh1gshrgGQh7gGhmAtQgWAKgLgUQgMgTAUgOIAGgFQgOADgIgKQgqg2Ajg0IAIgKIAAgMQAAgZAZAAQAMAAAGAGQAWgJAcgBQAMAAAHAKQAIAKgDAMIgBAEQABAGgCAHIgPAqQgDAKgGAEIgCAMIAEgDQAWgMAMAVQADAFABAFQBBgNBIAEQB5AGCCAzQB5AuB1BCQA0AeAfAfQAnAnAOAwQAHAYgYAGIgKACQgQAAgFgTg");
	this.shape_56.setTransform(140.8,42.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#363030").s().p("AhqBGQgWgMAOgUQAjgxAXgXQAognAngBQARgBAMALQAGAGACAHIAdgGQAYgDAHAYQAGAYgYAEQgmAGgdALQgHADgGAAIgeAZQgTAPgRgQIgEgEIgXAfQgIAMgMAAQgHAAgIgFg");
	this.shape_57.setTransform(75.7,29.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#363030").s().p("ArCFLQADiEAchhQgDgJAGgKIAFgIQASg2AagpQBKh5CmhhIADgBQADgQAOgEQC5g+DBggQAYgEAGAXIABADIAxgGQA5gFAtACQAsACA2AOQAfAJA/ATQA4ARB0AWQBgAbAtBDQANAUgVANQgWAMgNgUQgog6higXQhygSgxgQQg3gSgggHQgwgMgrAAIgbAAIgFABIgYAEQAHAGACALQADASgPAGIgeAMIAfgDQAWgDAHATIAXgDQASgCAFAUIABAKIAGgBQAYgDAHAXQAHAYgYAFQg0ALh7A3QhpAwhFAGIgFAEQgKAHgMgFIAAgBIgBABQgrALgWgcQgEgFgFgNQgFgMgEgGQgDgEgJgIQgFAEgJAAIgEAAQhmA2hhBGQgLAJgLgGQhDA/g3BNQgHAJgIADQgVBAgFBFQgCAYgYAAIgBAAQgYAAABgYgAjXiaIABAFIAAALQAEgNAIgNIgNAKgAigi6IgKAFIAHAEIAEgHIADgEIgEACgAiMjEQAGAAAGADQAIgOARACQAGABAFADIAFgOQgcAIgZALgAgrkcIAMgCIAAAAIAAgBIgMADg");
	this.shape_58.setTransform(86.8,49.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#363030").s().p("AtTH8QAIhCgEhcIgKifQgLjEAqh0QBTjiD+hmQDBhOEfgDQERgDEMA7QBxAZBJAoQBeA0AtBSQALAWgVAMQgWANgLgVQgwhZhxgwQhIgeiLgZQkOgwkDALQiNAHhoAXQiDAdhjA8QhhA6g+BZQhBBcgQBsQgOBZAMCrQANCygKBSQgDAYgZAAQgZAAADgYg");
	this.shape_59.setTransform(99.6,65.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#363030").s().p("AgPB3QgYgHAGgXQAdhggOhRQgDgXAXgHQAYgHAEAYQAQBfgfBsQgFASgPAAIgKgBg");
	this.shape_60.setTransform(184.9,55.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#363030").s().p("AsAG0IgqgtQgQgSASgSQANgNANAHIgJheQgHhdAChGQABgtACgWQAFgjALgcQAWgzAegtQBAhcBjhHQBahABwgpIADgBQAKgEAKAGIACACQAFAEACAEQAFAJgDAJQgBAzA+gJQARgDBQgdQBOgeBDgTQCXgqCWAPQCZAPCBAuQCXA2BiBZQASARgSARQgSASgRgQQg8g3hUgnQhDgghfgbQjEg2idARQhKAIhiAhQhvApg4ASQg6AUgvgXQgdgOgLgbQgMACgKgFQhQAihDAxQheBEg6BZQgrBDgIAsQgFAcgBAnIAABDQACA6AHBNIANCHQACAQgRAGQgGADgFAAQgKAAgHgIg");
	this.shape_61.setTransform(97.9,80.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DA735C").s().p("AA4BlQgcgHgOgYIgEgIQglgpgZgqQgPgZgDgMQgFgUANgRQAFgHAJACQAJABAAAKIAAALQAIACAAAKQgBALAEALIADAGIAeAqQAHAJAIAQQANASADAIIABAEQAMAPAOADQAMADgEAMQgDAKgIAAIgEgBg");
	this.shape_62.setTransform(11.2,135.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DA735C").s().p("AAsB0QgTgZgXglIgng/IgXglQgJgVAIgUQARglAmAGQAkAGAOAjQADAGgDAEQABAEgDAFQAFARgCAQQAAAFgGAUQgFAOACAKQACAPAKAZIARAnQADAJgJAFQgEADgDAAQgFAAgDgEgAAMhWQAIABAJAEIgHgFQgJgGgHAAIAGAGg");
	this.shape_63.setTransform(11.2,132.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DA735C").s().p("Ag2BgQgGgLAKgGQASgMAPglIABgDQgHgFAFgJIALgVQgIgEADgKIAEgIIgEgBQgLgHAHgKQANgWAKgLQAPgPATgFQAIgCAFAHQAFAGgEAHIgJAPQAGAFgDAHQgGATgPAYIgLARIgRAsQgPAmgWAOQgEACgDAAQgGAAgEgGg");
	this.shape_64.setTransform(193.6,132.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DA735C").s().p("AhJBhQABgKAOgXQAMgTAFgOQAGgQgBgUQAAgaADgJQADgMAJgIQAAgEACgEQAGgJALgVQAJgRAQgEQAOgEANAIQANAHAGANQAJATgIAYQgFAOgQAYQgLAPgQAfQgSAigHANQgNAWgbAOQgKAGgHAAQgOAAABgYgAAMhIIgHANQACAIgHAFQgNAJABAgQABAmgEAIQgFAPgUAaQgQAdAggsIAUgnQALgaAIgLQAWgZACgKQgLgogIAAQgEAAgEAMg");
	this.shape_65.setTransform(194.7,131);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#363030").s().p("AAFA/QgcgBgTgGQgWgIgUgQQgYgRgLgLQgSgSADgTQABgJAMgEQAUgHAggDIA2gDQA/gFBFACQASAAAAATQAAATgSgBQhUgBhLAHIgmAFIABACQAJAEANAMQANANALAEQAJAEAdABQASAAAAATQAAASgRAAIgBAAg");
	this.shape_66.setTransform(98.6,173.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DA735C").s().p("AgDAwQhqgBhOgvQgUgMAMgVQANgWAVANQBEAqBfgBQBTAABVgfQAXgIAGAYQAHAWgXAJQhbAhhbAAIgEAAg");
	this.shape_67.setTransform(105,195.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#363030").s().p("AhGAYQgFgMAWgJIBAgdQAJgEALgBQANgBAFAGQAPgCAGAHQAFAGgHAIQgFAGgIACQgyARgrALQgKADgHAAQgMAAgDgIg");
	this.shape_68.setTransform(69.7,180.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#363030").s().p("AhFAQQgJgDAEgIQADgFAHgFQAUgLAVAGQAdAJAYgMQAbgOAOAIQAHAEgDAHQgCAGgIADQgrAWgpAAQgZAAgZgHg");
	this.shape_69.setTransform(90,176.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#363030").s().p("ADxBTIg6gQQgcgIgbgFQgLAFgSgCQgMgBgDgEQgKACgPABQgWAAAEgLIgHAAIgQAAQgLAHgSAAQgKAAgFgDIgLACQg2AIgSABQgVABgNgDQgLgDgIgHQgHACgLABQgaACAFgRIAEgSQgOAOgRANQgJAHgUAAQgWAAAEgPIAAgBIgEAEQgJAJgXACQgaADAFgRQAPg8AlgxQAKgOAcABQAcAAgMAQIgEAGIABgBQAKgKAaABQALAAAEADQAJgGAPgDQAZgEAAATIAAAJIAMgPQAIgJAYgCQAZgCgEARIgFASIAIgMQAKgNAagCQAKgBAFACQAIgKAYgDQAXgCAAAMIAOgCIAJABQAKgFAOgBQAagBgGATIARgDQAagCgGAQIgLAbIABAAQAYgDgCASIgCAJIAGgBQAVAAgCAOIgBAFQBLALBEAfQAQAIgQANQgOAMgMABIgKAAQgXAAgagGg");
	this.shape_70.setTransform(115.2,174.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#363030").s().p("AE9BYQgTgmgMgUQgTgfgXgUQgggbgxAAIhYALQhGAHhWgGIhFgHQgBAxhOBKQgHAGgYADQgaADAFgLIADgFQgJAEgPADQgXAEABgPIAAgBQgIAGgTACQgcAEAFgMQAKgXANgVQAJghAXgZQAIgfANgMQAMgLATgGQASgGAQACQAOACAHAHQARgDAPADQAJADAHAEIBGAJQA9AHAvAAQAfABA+gJQA9gJAgABQA+ABAuAwQAhAhAiBGQAFALgcAJQgLADgIAAQgMAAgEgIg");
	this.shape_71.setTransform(103.1,172.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#363030").s().p("AFgA7QgPgBgYgNIgrgWQgZgLgXAEQgGABgNAFQgMAFgHABQgUADgdgNQgggNgQAAQgOAAgiAIQgeAGgSgCQgKgBgTgGQgUgHgJgBQgOgCgTACIgiAFQgaAEgbgCIgzgHQgLgCgaADQggAFgKABQgdABgNgOIg3AYQgYAKgOgRQgPgRAbgLIBYgnQAOgGANADQAPAEAAAPIAmgEQAngEAGABIAkAJQAVAFAQgBQAQgCAigGQAXgDAYADQARACAdAHQAWAGAkgGQArgIARABQAMAAAeANQAbAKAPgCQAPgCAZgHQAWgEATAEQAOADAjATQAgARAQAAIAlgDQAVgDASAIQAYAKgSATQgTAUgUgJQgLgFgTAEQgVAFgIAAIgBAAg");
	this.shape_72.setTransform(105.1,181.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#363030").s().p("AGJB0IhShnIgggpQgUgZgRgNQgbgUgxABQgNAAhEAHQhZAKgWABQgrABhIgNQhPgPgigBQg9gDgcA2IgWAwQgNAfgPARQgHAJgbADQgbACAJgKQAOgRANglQAOgoALgPQAZgkA3gTQA0gRBFAJQAoAGBSAPQAyAGBsgOQBngNA3AJQAgAGAaAXQAOAMAeAmIBjB8QAIAKgcAJQgOAFgJAAQgIAAgDgEg");
	this.shape_73.setTransform(106,173.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#363030").s().p("ACoAqQhMg4hfAAQhdAAhRA1QgPAKgWgFQgVgFAWgPQBlhCB1gDQB8gDBdBEQALAJgaALQgQAGgKAAQgIAAgFgEg");
	this.shape_74.setTransform(69.1,95.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#363030").s().p("AjOAnQgWgLAGgFQBWhMCEALQBvAJBsBAQASALgSAAQgSgBgKgGQhZg1hhgCQhpgChJBBQgDACgFAAQgHAAgOgGg");
	this.shape_75.setTransform(136.5,93.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#020203").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_76.setTransform(137.9,115.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3DAD4F").s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_77.setTransform(137.9,115.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AiEBBQg3gbAAgmQAAglA3gbQA4gbBMAAQBNAAA4AbQA2AbAAAlQAAAmg2AbQg4AbhNAAQhMAAg4gbg");
	this.shape_78.setTransform(137.9,114.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DA735C").s().p("AiEBSQg3giAAgwQAAgvA3giQA4giBMAAQBNAAA4AiQA2AiAAAvQAAAwg2AiQg4AihNAAQhMAAg4gig");
	this.shape_79.setTransform(137.9,112.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#020203").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_80.setTransform(71.7,115.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3DAD4F").s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_81.setTransform(71.7,115.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AiEBBQg2gbAAgmQAAglA2gbQA3gbBNAAQBNAAA3AbQA4AbAAAlQAAAmg4AbQg3AbhNAAQhNAAg3gbg");
	this.shape_82.setTransform(71.8,114.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DA735C").s().p("AiEBSQg2giAAgwQAAgvA2giQA3giBNAAQBNAAA3AiQA4AiAAAvQAAAwg4AiQg3AihNAAQhNAAg3gig");
	this.shape_83.setTransform(71.8,112.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C9846F").s().p("AACB4Qgkg6gPgmQgYg8AOgsQANglAkgLQAlgMAdAaQASAQgSASQgSASgSgQQgSgQgJAYQgIAUADARQACAOAKAZQAQAsAdAsQANAVgVAMQgJAGgHAAQgLAAgIgNg");
	this.shape_84.setTransform(6.5,128.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C9846F").s().p("AA5CaIhGhBQgZgZgQgWQgSADgGgPQgmhWAZhYQAEgOAOgDQANgDALAJIAEADQAHgFALACQAOADAGAKQAVgIAYAHQAgAKAPAgQAKAWgVANQgWAMgKgWQgGgNgHgHIADAPQAEAWADAsIgBAAIABAHQABAHgCAEIACAaQABASgRAFIBFBDQARARgSARQgJAKgJAAQgIAAgJgJg");
	this.shape_85.setTransform(15.9,137.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C9846F").s().p("ABgDCQhgg1gwgsQhIhCgMhQQgFglAJghQAKglAagVQAegZApAHQAdAFApAYQAVANgNAVQgMAWgVgMQgcgSgQgEQgbgGgSASQgSASgBAjQgBAyAjAyQAcAoAxAjQAbASBDAkQAWAMgNAVQgIAOgMAAQgHAAgHgDg");
	this.shape_86.setTransform(14.2,137.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C9846F").s().p("ABKC0QhEg7g0hMQgfgrgOgZQgXgrgDgjQgEghASgXQARgYAhgFQAdgDAcAQQAUALAdAaQARAQgRASQgSARgSgQIgRgSQgMgMgIAAIguAjQAFARAHAOQAPAgAbAnQAuBJBMBCQASAQgSARQgJAJgJAAQgJAAgJgHg");
	this.shape_87.setTransform(14.8,134);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C9846F").s().p("AgjBPQgVgNAJgWIAzhxQAKgWAVANQAWAMgKAWIgyByQgGAOgLAAQgHAAgIgFg");
	this.shape_88.setTransform(194,131.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C9846F").s().p("AhJCyQgVgJAHgUIAFgOQgIAEgNgFQgVgJAHgUQAOgrASgnQgRgIAEgTIAFgRQgIgKAEgMQASg3AignQArgxAxAIQAyAHAQA0QAMAogKA2QgEAXgYgGQgFgCgEgCQglBehBBHQgGAHgHABIgFAHQgHAMgMAAQgFAAgHgCgAgDgJIgWAvIgIAOIAEgFQATgjAQghIAOgZIAAAAQgKAIgNAdg");
	this.shape_89.setTransform(194.3,129.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C9846F").s().p("AhxC6QgKgRAOgNQA4g0AYgbIAOgPQAOgRALgRQAOgWALgUQATgogFgqQgEgmgbgGQgDADgEAFQgUAKgbAcIgWAZQgBAXAHAbQAHAWgYAHQgYAGgHgWQgGgVgCgTIgBgBQgSgSAQgSIAEgGIABgFQAJgwAkgaQAggYAkABQAQgHAPAAQAlgCAYAgQAVAegBAmQAAAqgYAuQgHANgMASIgJAQQgNAUgUAYQgdApgRAVQgkAsglANIgIACQgMAAgIgOg");
	this.shape_90.setTransform(195.1,134);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DA735C").s().p("AgwAjQgYgVgWgjQgMgUAVgNQAWgMAMAUIACACIAFAEIAXAZQALAKAIAFIAKgDQAGgDAIgLQANgSAbgNQAPgIANAKQALAKgCAQQgDANgNAKIgXASIgTAXQgMALgNADIgMACQgYAAgcgZg");
	this.shape_91.setTransform(103.6,158.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DA735C").s().p("AAOArQgTgIgMgOQgFgHgCgIIgBgCIgBAAQgKgCgFgIQgFgKACgJQACgKAKgFQAJgFAKACQAOAEAOAPIAXAZQAOAMgLASQgHAOgMAAQgEAAgEgCg");
	this.shape_92.setTransform(100.2,158.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DA735C").s().p("AhMB7QgJgHABgMIgBhCQAAgwAFghQAQhiBFAIQBFAIAGBUQABAPgBA4QgBArAGAUQAGAXgYAHQgYAHgGgYQgHgXAFg8QAEg2gLgaQgNgbgRAFQgRAGgIAcQgDALgBAQIAAAbIgDBPIACAGIACAJQAGAXgZAHIgJABQgNAAgFgLg");
	this.shape_93.setTransform(104.2,124.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DA735C").s().p("AgxAMQgHgWAXgGQAUgEAJANQAAgOgDgVQgEgWARgHQAJgEAJADQAKADADAIQAMAaACAbQACAcgKAZQgDAJgGAFQgIAMgPACIgHABQghAAgUg+g");
	this.shape_94.setTransform(113.1,154.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DA735C").s().p("AgNDEQgNgLAEgPQAIgcgQAOQgIAIgRASIgDADIgCADQgKANgPAAQgLAAgIgGQAOAIASgKQgIADgHgBQgPAAgKgIIgCgDIgFgGQgKgNgCgWQgBgNALgGIACgFIADgEIAAgGQACgYAZAAQASAAAEAMQgDgNADgQIASg9IA5i/QAGgUAVADQAVADABAVIAAAKQAKAFADAKQAHAYgEAdIgCANQAPAHgDAUIgCAMQAEADADAFQALATgCAgIAAAAQAJASgCAXQAHAEACALQAHAkALAmQAHAYgYAGQgYAHgHgYIgFgPQgGACgIgCIgEgBQgEADgFABIgCAPQgCAUgSAEQgGAJgJAHQgGAFgHAAQgGAAgIgHg");
	this.shape_95.setTransform(101.7,139.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DA735C").s().p("AAODNQgXgBAAgZQAAgZAXABQAKABgNgxIgPg0QgKgfgKgnQgKgpgIgoIgFglQgEgXgIgLQgOgUAVgMQAWgNAOAUQANASAFAjIAJA5QAQBMAWBBQARA2AAAkQgBA4gvAAIgEAAg");
	this.shape_96.setTransform(111,137.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DA735C").s().p("AhaDPQgYgHAHgXIBek3IAOgvQAMgZAYgCQAjgCAgAvQAOAUgWANQgWANgNgUQgNgTgIAQQgEAIgEATIhbEwQgFASgQAAIgKgCg");
	this.shape_97.setTransform(99.8,135.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DA735C").s().p("AgKDlQgIgGgHgaQgGgZgHgDQgCgBgaAJQgbAKgIgCQgOgEgJgKQgHgJgGgQQgDgHAEgJQADgIAHgEIAUgLIADgCQAshnAZhvQAGgzAJgcQAPgyAkACQAWACAOAgQAKAXAGApIALBCIAbCFIAMA0QAIAfgDAUQgEAggaAGQgbAHgSgcIgHgKQgDAJgDARQgFAOgEAHQgGALgKAEQgIAEgHAAQgLAAgKgIgAgHB/QAIAHAHAMIADAIIAGgQQAIgTAPgHQASgIATAMIAGAFQAIArACgTQABgOgLgKIgCgIIgujmQgEghgGgOQgBgCAAgCQAAgBgBAAQAAgBAAAAQAAAAAAABIABASQgGBIgdBZQgSAygbBAIAPgFIAHgBQAPAAAMAJg");
	this.shape_98.setTransform(102.6,139.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3A3635").s().p("AkEDxQhpiCh/jJQAugUBbgUIjKgrID7kfIAMBpQASCCAdB7QBdGICoCrQBBiABfmUIBTl7IEtDIIjEAUIBbBIIgwBgQg7Byg5BhQi2E0hdAEIgDAAQheAAixjcg");
	this.shape_99.setTransform(105.3,287);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EDEDED").s().p("Ag3B/Qg8g1gWg2QBQgiBRhRIBDhKIAuAlQAFATgMAQIiCELQgYgQgfgbg");
	this.shape_100.setTransform(117.5,252.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EDEDED").s().p("AiKhhQgIgMADgMIAug1IBHBQQBXBVBUAhQgXA3g9A1QgeAbgaAQg");
	this.shape_101.setTransform(89.2,252.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#23284F").s().p("AhcgHIAmgWIB/AeIAUAdg");
	this.shape_102.setTransform(104.6,263.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#23284F").s().p("AhhAUIDChBIACAcIjFA/g");
	this.shape_103.setTransform(105.8,320);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#23284F").s().p("AhjAVIDGhDIACAdIjJBAg");
	this.shape_104.setTransform(104.4,306);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#23284F").s().p("AhdAWIC7hFIABAdIi9BCg");
	this.shape_105.setTransform(104.3,295.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1C1A34").s().p("Ag2BGQgdgFgcgLIgWgJIBBh2IBEAAIAeAJQAlAMAYANQBQAqhDAqQgvAdg8AAQgYAAgbgEg");
	this.shape_106.setTransform(105.4,262.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#23284F").s().p("AhXAVICthDIADAdIiwBAg");
	this.shape_107.setTransform(104.2,281.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#23284F").s().p("AhPAKIBMgeIBVgPIAAAFIijBCg");
	this.shape_108.setTransform(104.1,271.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1C1A34").s().p("AhsC/IAXoMICeAAIAkItIhcBug");
	this.shape_109.setTransform(104.8,300);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DDDDDD").s().p("AjHDqIhglRIgmkhIAbgpIAhggIEMCSIEIiLIBLBzIifJBIiWDog");
	this.shape_110.setTransform(104.2,286.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#191919").s().p("AgWAWQgJgJAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgMAAgKgKg");
	this.shape_111.setTransform(106.6,431.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#191919").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_112.setTransform(106,408.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#191919").s().p("AgWAWQgJgJAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgMAAgKgKg");
	this.shape_113.setTransform(106,385.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#232222").s().p("ALGSdIgvwIIAXPYIpDACQgSAAgOgMQgOgNgCgSIgZjHIgbC/QgDAWgPAPQgRAOgXABIojABIAkz9Ig/UpIk/gGIg09mIK3nNIEqEDIE3j7IKVFVIAcfcg");
	this.shape_114.setTransform(104.1,361.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C9846F").s().p("AAyD9IgOg2QgIhXACgYQgGhRgihBIghgxIgdBrQgeBhgGg3QgHg2AXiCIAYh4IB+AUIA1C/IgHBDQgKBWgNBdQgKBEgLAAQgFAAgFgKg");
	this.shape_115.setTransform(190,499.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DA735C").s().p("AglA+IA9h9IAOBAIgfAkQgZAbgNAAQgDAAgDgCg");
	this.shape_116.setTransform(189.3,506.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DA735C").s().p("AgjA+QgMgKAjg6IAmg5IANA/IgeAlQgZAbgNAAQgEAAgCgCg");
	this.shape_117.setTransform(191,513.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C9846F").s().p("AhdDJQgPhfgLhZIgJhFIA+jEICRgUIAdB6QAbCGgIA4QgIA4gjhjIghhuIgnAyQgmBCgIBUQADAYgKBZIgRA4QgFAJgFAAQgNAAgMhEg");
	this.shape_118.setTransform(24.8,503);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#DA735C").s().p("AgHAmIgkglIAQhBIBHB/QgDACgEAAQgPAAgdgbg");
	this.shape_119.setTransform(25.7,510.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#DA735C").s().p("AgJAmIgkgmIAQhAIArA6QAqA8gOAJQgDACgEAAQgPAAgdgbg");
	this.shape_120.setTransform(23.7,516.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#191919").s().p("AoKIjIgyvjIR5huIgNRRIoSAAIgepBIgOJNg");
	this.shape_121.setTransform(108,498.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C9846F").s().p("Ak2OuQiehDh6h6Qh6h6hDieQhFijAAizIAAoKQAAj/C2i3QC2i2EAAAIHJAAQEAAAC2C2QC2C3AAD/IAAJJQAACmhACYQg/CShxByQhxBxiTA+QiYBBimAAQixAAikhGg");
	this.shape_122.setTransform(103.4,127.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#DA735C").s().p("Ah8CtQg4gRgogfIAAhOQABAJACgKQACgKgFAJIACgPQgBgHgEgHQgGgTgQgPQgPgPgTgGIgEgCQAWhBBOgqQBPgqBmAAQB1AABUA3QBUA4AABPIAAAEQgdANgKAIQgQAOgBAWIAAA1QgnAkg8AUQg8AWhGgBQhAABg6gTg");
	this.shape_123.setTransform(103,220.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C9846F").s().p("AjfITIAAwlIG/AAIAAQlg");
	this.shape_124.setTransform(103.4,236.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,207.1,554.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69E8F").s().p("AgxAIQATgWAfAAQAeAAATATQgTAKghAAQgcAAgTgHg");
	this.shape.setTransform(49.6,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA725C").s().p("AgtAeQgTgQAAgXQAAgTAOgPQATAHAcAAQAhAAATgKQAQARAAAUQAAAXgTAQQgTARgbAAQgaAAgTgRg");
	this.shape_1.setTransform(49.7,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F69E8F").s().p("Ag+AMQAMgNASgJQASgKATAAQAlAAAVAfQgWAKgqAAQgnAAgWgJg");
	this.shape_2.setTransform(35.6,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA725C").s().p("Ag2AiQgWgTAAgbQAAgVAQgTQAVAJAnAAQArAAAVgKQANASAAAXQAAAbgWATQgXAUggAAQgfAAgXgUg");
	this.shape_3.setTransform(35.5,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F69E8F").s().p("Ag7AKQAXgaAkAAQAlAAAXAaQgVAHgnAAQgmAAgVgHg");
	this.shape_4.setTransform(20.4,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA725C").s().p("AgzAfQgWgSAAgZQAAgTAOgSQAVAHAmAAQAnAAAVgHQAOASAAATQAAAZgWASQgVATgfAAQgeAAgVgTg");
	this.shape_5.setTransform(20.4,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F69E8F").s().p("AgxAIQATgWAfAAQAeAAATATQgUAKgfAAQgeAAgSgHg");
	this.shape_6.setTransform(6.4,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DA725C").s().p("AgtAeQgTgRAAgWQAAgSAOgQQATAHAdAAQAgAAATgJQAQAQAAAUQAAAWgTARQgTAQgbAAQgaAAgTgQg");
	this.shape_7.setTransform(6.5,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A25246").s().p("AgTAeIANgYIAAghIgNgcIAnAjIAAAnIgUAkg");
	this.shape_8.setTransform(43.9,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A25246").s().p("AgTATIAZghIgGgVIANgcIAAAeIAHAaIAAAtIgUAag");
	this.shape_9.setTransform(27.3,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A25246").s().p("AgaAkIAFgYIAZgwIAXgMIgSAUIAAAyIgOAbg");
	this.shape_10.setTransform(14.1,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B56556").s().p("AjVgaIB0ggIBwAAIAlgHIAkARIA0AJIAugOIBAAsIAWBIIofADg");
	this.shape_11.setTransform(27.8,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B66255").s().p("AiZBIQg/gegBgqQABgpA/geQBAgdBZAAQBaAABAAdQBAAeAAApQAAAqhAAeQhAAdhaAAQhZAAhAgdg");
	this.shape_12.setTransform(29.3,17.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F69E8F").s().p("AgxAIQAUgWAeAAQAdAAAVATQgVAKggAAQgcAAgTgHg");
	this.shape_13.setTransform(226.3,14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DA725C").s().p("AgtAeQgTgRAAgWQAAgSAOgQQATAHAcAAQAgAAAVgKQAPARAAAUQAAAWgTARQgTAQgbAAQgaAAgTgQg");
	this.shape_14.setTransform(226.4,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F69E8F").s().p("Ag+AMQAMgNASgJQASgKATAAQAlAAAVAfQgWAKgqAAQgoAAgVgJg");
	this.shape_15.setTransform(212.3,12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DA725C").s().p("Ag2AjQgWgUAAgaQAAgWAQgTQAVAIAnAAQArAAAWgJQAMATAAAXQAAAagWAUQgXATggAAQgfAAgXgTg");
	this.shape_16.setTransform(212.1,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F69E8F").s().p("Ag7AKQAKgLAQgHQAQgIARAAQAlAAAWAaQgUAHgnAAQgmAAgVgHg");
	this.shape_17.setTransform(197.1,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DA725C").s().p("AgzAfQgVgSAAgZQAAgUANgRQAVAHAmAAQAnAAAUgHQAOARAAAUQABAZgWASQgVATgfAAQgeAAgVgTg");
	this.shape_18.setTransform(197.1,19.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F69E8F").s().p("AgyAIQAVgWAeAAQAeAAATATQgUAKgfAAQgeAAgTgHg");
	this.shape_19.setTransform(183.1,14.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DA725C").s().p("AgtAeQgTgQAAgXQAAgTANgPQATAHAeAAQAfAAAUgKQAQARAAAUQAAAXgTAQQgTAQgbABQgagBgTgQg");
	this.shape_20.setTransform(183.2,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A25246").s().p("AgSAdIAMgYIAAgfIgMgcIAlAiIAAAnIgTAlg");
	this.shape_21.setTransform(220.6,13.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A25246").s().p("AgTASIAZgfIgGgWIAMgdIAAAgIAIAZIAAAtIgUAbg");
	this.shape_22.setTransform(203.9,12.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A25246").s().p("AgaAkIAFgYIAYgxIAYgLIgSATIAAAzIgOAbg");
	this.shape_23.setTransform(190.8,13.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B56556").s().p("AjVgaIB0ggIBxAAIAlgHIAjARIA0AJIAugOIBAAsIAWBIIofADg");
	this.shape_24.setTransform(204.5,10.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B66255").s().p("AiZBIQhAgeAAgqQAAgpBAgeQBAgdBZAAQBaAABAAdQA/AeAAApQAAAqg/AeQhAAdhaAAQhZAAhAgdg");
	this.shape_25.setTransform(205.9,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,232.9,31.4), null);


(lib.pil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").p("AHfheIsbAAIAAhBIigCfICgCgIAAhBIMbAAg");
	this.shape.setTransform(-0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AndAAICgifIAABBIMbAAIAAC9IsbAAIAABBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pil, new cjs.Rectangle(-48.8,-17.2,97.7,34.5), null);


// stage content:
(lib.animation1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hashtag
	this.instance = new lib.Tween38("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-332.8,287.8);
	this.instance._off = true;

	this.instance_1 = new lib.Tween39("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(328.4,295.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(343).to({_off:false},0).to({_off:true,x:328.4,y:295.8},18).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(343).to({_off:false},18).wait(4).to({scaleX:1.15,scaleY:1.15},0).wait(4).to({scaleX:1,scaleY:1},0).wait(36).to({startPosition:0},0).wait(1));

	// blink
	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(137,203.3);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(137,203.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},175).to({state:[{t:this.instance_3}]},5).to({state:[]},1).to({state:[{t:this.instance_2}]},30).to({state:[{t:this.instance_3}]},5).to({state:[]},1).to({state:[{t:this.instance_2}]},44).to({state:[{t:this.instance_3}]},5).to({state:[]},1).to({state:[]},37).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({_off:false},0).to({_off:true},5).wait(31).to({_off:false},0).to({_off:true},5).wait(45).to({_off:false},0).to({_off:true},5).wait(140));

	// pil3
	this.instance_4 = new lib.pil();
	this.instance_4.parent = this;
	this.instance_4.setTransform(436.9,488.9,2.304,2.887,20.5,0,0,3.2,12);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).to({scaleX:3.06,scaleY:3.83},5).wait(10).to({_off:true},1).wait(240));

	// pil2
	this.instance_5 = new lib.pil();
	this.instance_5.parent = this;
	this.instance_5.setTransform(442.9,316.3,1.94,1.94,3.5,0,0,0,0.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).to({regY:0.3,scaleX:2.59,scaleY:2.59,y:316.5},5).to({regY:0.2,scaleX:1.94,scaleY:1.94,y:316.3},5).to({_off:true},21).wait(235));

	// pil1
	this.instance_6 = new lib.pil();
	this.instance_6.parent = this;
	this.instance_6.setTransform(471.6,218.8,1.616,2.534,-12.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130).to({_off:false},0).to({regX:0.1,scaleX:2.15,scaleY:3.38,x:471.8,y:218.7},5).to({regX:0,scaleX:1.62,scaleY:2.53,x:471.6,y:218.8},5).to({_off:true},35).wait(231));

	// borgmester
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9892F").s().p("AgxA0QgVgVAAgfQAAgeAVgWQAVgVAcAAQAeAAAUAVQAVAWAAAeQAAAfgVAVQgVAWgdAAQgcAAgVgWg");
	this.shape.setTransform(176.4,429.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9892F").s().p("AhcBiQgngpAAg5QAAg4AngpQAngoA1AAQA3AAAmAoQAnApAAA4QAAA5gnApQgmAog3AAQg1AAgngog");
	this.shape_1.setTransform(139.1,458.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_2.setTransform(148.3,443.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_3.setTransform(152.5,450.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_4.setTransform(164.2,433.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C9892F").p("Agjg5IgsBtIBxAGIAthug");
	this.shape_5.setTransform(168.4,440.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_6.setTransform(178.4,414.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_7.setTransform(185.5,418.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_8.setTransform(186.6,397.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#C9892F").p("Ag5gdIARB2IBjg6IgRh3g");
	this.shape_9.setTransform(193.8,400.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_10.setTransform(194.9,379.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C9892F").p("Ag6gdIASB2IBjg6IgRh3g");
	this.shape_11.setTransform(202.1,383.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C9892F").p("Ag9g3QADAAAAAAQAFAFAZAKQAZAKADAEQAHAEAVAOQANAIAPAEIhjA6g");
	this.shape_12.setTransform(203.5,364.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#C9892F").p("Ag6g4QAJAIAOAGQAbAKAFADQAGAIAXAJQAZAKAHAGIhjA6g");
	this.shape_13.setTransform(210.5,368.5,1,1,0,0,0,0.1,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9892F").s().p("AgxAyQgUgVAAgdQAAgcAUgUQAVgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAVQgTAUgeAAQgcAAgVgUg");
	this.shape_14.setTransform(102.2,431.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9892F").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	this.shape_15.setTransform(139.2,459.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_16.setTransform(130.1,445.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_17.setTransform(125.9,452.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_18.setTransform(114.3,435.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C9892F").p("AAjg2IAsBnIhwAGIgthog");
	this.shape_19.setTransform(110.1,442.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhwg");
	this.shape_20.setTransform(100.2,418.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_21.setTransform(93.1,421.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_22.setTransform(92,401.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C9892F").p("AA6gbIgSBvIhhg3IAQhwg");
	this.shape_23.setTransform(85,404.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhwg");
	this.shape_24.setTransform(83.8,384.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C9892F").p("AA6gbIgRBvIhig3IARhvg");
	this.shape_25.setTransform(76.7,388.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#C9892F").p("AAphAQACgBgEABQgEADgQAJQgPAIgEADQgKAGgTASQgRAQgNACIAKAIIBiA2IARhug");
	this.shape_26.setTransform(74.8,370);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C9892F").p("AA0g/QgYAUghAPQgLAOgnAYIBiA3IAShvg");
	this.shape_27.setTransform(68.3,373.5,1,1,0,0,0,0,0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#363030").s().p("AGxEAQgNhOgcg2QgnhMg8gKQg0gIg3gcQgogTg5goQhDgvgrgXQg+ggg+gMQgrgIhfgKQgvgEgkgGQguAHgtgCQgYgBAAgZQAAgZAYABIAUABIAEgNQACgKAJgFQAKgFAJADIBEAVQAJACAFAHIBJAIQBnAKA4AQQA4APA/AmIBtBJQBKAyAzAPIA1AKQAhAGARANQAtAlAgBFQAaA6AMBEQAEAYgYAHIgKABQgQAAgDgTg");
	this.shape_28.setTransform(175.4,135.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#363030").s().p("AAAD1QgYgHAFgXQAQhTgPiHQgTipABgxQABgZAZAAQAYAAgBAZQgBAyASCuQAPCLgRBWQgEATgPAAIgJgCg");
	this.shape_29.setTransform(223,179.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#363030").s().p("AlABnQgSgSAPgSQBOhfCAgPQAOgCAGAKIAGgDIAOgHQgCgFABgHQADgWAWABQAoABA0gJIASgDQAGgEAJAAIAJgBIAxgJQBvgTBJAbQAWAIgGAYQgHAYgXgIQgRgHgUgDQgGAKgQABIg/ABIAIADQAUAHgCAVQgCAUgWAAQhjAAhegXIgMAFIhtA1QhBAfgzgHIgCAAQgTAQgRAVQgIAKgIAAQgIAAgIgJgABkheICNgCQgegDgeAAQgpAAgoAFg");
	this.shape_30.setTransform(152.4,139.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#363030").s().p("AgbCiQgQgGACgRQADgdABgdIgBgIIgRjTQgCgZAZABQAZAAACAYIAHBlQAJAGABAOIAAAHIAAAAQAIgKARAFQAYAGgGAXQgDANAAAfQAAAdgFAOQgFAOgPARIgbAZQgGAGgKAAQgFAAgGgBg");
	this.shape_31.setTransform(222.3,207.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#363030").s().p("AgaBgIgUhgQgCgQABgJQABgNAKgJIAGgEQgLgJAEgQIgCgHQgIgXAYgGQAXgGAIAWIACAEQARAvASApQAKAVgTALQgOAIgMgIIABADIAKAzQAFAYgYAHIgJABQgPAAgEgSg");
	this.shape_32.setTransform(231.1,195.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#363030").s().p("AAUB+IgLgLQgLgLADgMQgPgigKgiIgIg5QgGgogNgLQgTgOAMgWQANgWATAPQATAOAIAUQAHAQAEAcQAKBOAlBDQALATgRANQgIAGgIAAQgIAAgJgIg");
	this.shape_33.setTransform(223.5,151.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#363030").s().p("AA3FmQgYgHAEgYQAaikhDiaQgFgMAGgMQAFgNAPAAQASABARADIgIgRQgRgjgTgZIgmgnQgXgWgHgWQgEgNALgMQALgLANAFIALAEIhbhnQgQgSASgRQASgSAPASICiC5QALANgJASQgJASgSgIIgOgGQALAPAKAQQAUAhAeBLQAGAQgPAKQgOAJgOgHQgNgGgNgEQA2CXgaCiQgCASgQAAIgKgBg");
	this.shape_34.setTransform(222.7,163);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#363030").s().p("Ag6BPQgJgDgGgJQgGgKAEgJQAQgnAOgPQAGgIAQgJQARgKAGgGIANgXQAJgMANgEQAMgCALAEQANAFAEALQAKAWgWANQgKAGgHgCIgCAFQgDAFgHAHQgFAFgRAKQgOAJgKANQgHAKgIASQgEAKgIAFQgFAEgHAAIgHgBg");
	this.shape_35.setTransform(70.2,131);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#363030").s().p("AgFAcIgXgUQgIgGAAgKQABgMAHgGQAHgIAKAAQAJAAAIAIIAXATQAIAGgBALQAAAKgHAIQgHAHgKAAQgJAAgIgHg");
	this.shape_36.setTransform(77.1,127.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#363030").s().p("AjXFpQgTigAYiYQAMhOAOgqQAHgTAIgRIgMAEQgSAHgJgSQgJgQAMgOQA4hCBFgxIgMAFQgWALgLgUQgLgUATgOQBFgzBRgVQBSgWBVAKQAYADAAAZQAAAZgYgDQhPgJhLATIgOAEIAGADQAMAGAAAQQAAAPgMAGQhKAkg9A1QALABAHAMQAKASgOAMQgqAkgUBIQgLAmgLBWQgPCAARCMQADAYgZAAQgZAAgDgYg");
	this.shape_37.setTransform(72.7,150.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#363030").s().p("AgXAAQAAgYAXAAQAYAAAAAYQAAAZgYAAQgXAAAAgZg");
	this.shape_38.setTransform(92.7,114.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#363030").s().p("AF8CfQghgjgsghIAEADIgKgHIAGAEIhqg1Ig4geQgOgDgMgBQgJAHgLAFQgeAOgkgJQgQgEgCgRQgBgJAFgHIAcgDIgBgHQASAEAQgIIAAgBIgVgIQgQAFgQAKQgFAEgDAEQgqAHgpAPQgUAHgJgVIgCgEIgzAMQgSAEgKgQQgJgNAHgKIgIAEQgEACgFABQgPAMgQgQIgFgGQhOAehWAJQgMABgIgKQgIgKAEgMQAHgXANgSQABgEAFgDQAGgIAIgGQAbgWApgFQAHgBAFACQBWgeBagSQARgEALAQQADAGABAEQBcACBYAXQAPAEACARQACANgHAHQgGgIAAAIIAEACIACgCIAAABIAGAFIAJADIAGABQAPACAGAKIAPAHQBRAlA5AkIAkAZIACABIABABIAAAAIAKAHQAoAfAgAjQARARgSASQgIAJgJAAQgJAAgIgJgAg8hJIAJgCIgFgBg");
	this.shape_39.setTransform(174.6,116.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#363030").s().p("AC9BgQhShNhlgmQgwgTgzgIIBsA4IAgAQQAVAMgNAVQgMAVgWgLIgugYQgfgQgYgKIgBABQgrAgg1gQQgXgHAGgYQADgKAGgEIgMgFQgWgJAGgWIACgHIgIgEQgRgJAGgSQAGgTASgBQB3gGBwAsQBuAqBZBUQASARgSARQgJAJgJAAQgJAAgIgIg");
	this.shape_40.setTransform(191,116.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#363030").s().p("AkzBZQgMgVATgNQBXg9BogRQAygPA1gIIgJgRQgIgRANgOQAMgNARAJQBDAmBHAGQACgOAQgGQAfgNAegKQAXgIAHAYQACAIgBAGIAVACQAUABAEAVQAEAVgWAGQhNAThNgJQgsgFgpgQQAAAHgEAGQgGAKgPACIgvAHQgFAOgSAAQghABgfAGQhYAahSAuQgIAEgGAAQgMAAgHgNg");
	this.shape_41.setTransform(103.3,117);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#363030").s().p("AhwBAQgNgQAOgQQAOgRASgPIgjAKQgYAGgGgXQgHgYAXgHQBkgbBjgIQAWgCACAWQAAAHgBAGIAVgEQAYgFAHAZQAGAYgYADQhwAWhgAuQgIAEgGAAQgLAAgHgLg");
	this.shape_42.setTransform(142.9,110);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#363030").s().p("AlrFAQgSjqCki7QCDiVCugoIgGAAQgSgDAAgVQABgVARgEQAugKBQAQQBWARAngFQAYgDAHAYQAGAYgYADQgoAGhWgRIgSgEQAEAIgDAJQgEASgTABQjVAMiVCuQiTCsAQDWQACAYgZAAQgZAAgCgYg");
	this.shape_43.setTransform(84.8,139);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#363030").s().p("AgWAvQgJgFgCgKQgCgKAEgJQAKgVAHgXQAHgXAXAGQAYAHgHAXQgIAcgOAcQgEAJgKACIgHABQgGAAgGgDg");
	this.shape_44.setTransform(224.9,171);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#363030").s().p("AH7EqQAAiJgLhJIgIgmIgMgQQg+hMgtgrQhMhJhOgXIgkgKQgWgGgOgHIglgVQgMgGgKgBQgMAGgRAAQgSAAgGgTIgBgDIgdAEIgCADQgNAMgRgIIgXAHQgOAFgJgKIgBABQgNAKgOgMQgFgEgCgFIgMAJQgKAHgJAKIAAABIgFAEQgSAMgMgRIgMAHQgQAKgOgOIgEgEQgJARgUgFIgGgCQgKAKgPgGIgFgDQgEACgGAAQgSAGgVACIgMAPQgKAOgQgIIgGgEIgHANQgLASgUgIIgFgDIgJAJQgMALgPgGQgHgDgEgFIgcAfQgLALgRgGQgKgEgEgHIgEABQgKADgJgFIgUgLQgVgMANgWQAMgVATAKQAOgUAUgQQAMgJAQAFQALADADAJIAKgLQAKgLAOAEQALAEAFAJIARgUQAJgNANABIAFgIQAKgQASAFQAJACAEAGIAbgiQAKgOAQAIQAIAFAEAGQANgEAOgDQAJgCAKAEIAJgKQAGgGAJgBQAJgCAHAFIADACQAMgLASAAQAOgBAGANIATgFQAOgDAKAJIADADIAMgEQANgEALAKIABACQAXgLAbgGQAJgCAJAFQAJAFACAKIABADQAkgEAlAEQAPACAGALQADAEAAAFIAUAHQAeALA6AaQBfAcBSBNIAaAZIgDgFQgMgVAVgMQAUgLAOATQAmA1AWBFIARAtIAFAIQBQBvgoBiQgJAUgTgCIgBgBIAAAcQAAAZgZAAQgZAAAAgZgAg6kcIAAACIAZgGIgEgBQgKAAgLAFgAj8kdIABABIACgCIgGgBIADACgAiwkvIACAHQAKgHAMgEQgFgCgEAAQgIAAgHAGg");
	this.shape_45.setTransform(166.5,171.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#363030").s().p("ADGCHQgdgqg3giQgegRhJghIjzhsQgWgKANgWQAMgWAWAKIESB7QA7AaAlAbQAwAiAfArQAOAUgWAMQgJAFgHAAQgLAAgJgMg");
	this.shape_46.setTransform(196.4,154.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#363030").s().p("AiKAIQgSgQASgRQASgSARAQQAdAaAaAFQAcAGAigOQAZgLBHgpQAVgMAMAVQANAWgVAMQgwAegcAPQgwAbghACIgGAAQgzAAg7g1g");
	this.shape_47.setTransform(110.4,149.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#363030").s().p("AMlF8QgXAAgCgYIAAgQQAEiCgUhgQgah+hGheQhAhXhcg5Qheg6hpgQQhtgQiHAeQgOADjdBAQg0APgnACQgzAEgngRQgQgHgXgTQgagWgNgKQgvgjgmAVQhcAzhUBQQhPBMg+BcQgOATgVgLQgWgNAOgUQBPh1BhhUQAtgnAzgjIA0gkQAggUAagFQAngGAoAfIBCA3QAzAfBUgUQAvgLBXghQEdhdDNBFQBmAiBVBGQBVBGA4BdQA3BbAUB5IAFAkQAFhGgEhGQgGi4g9i+QgIgXAYgGQAZgHAHAXQA9C6AIC/QAEBjgJBfIgEArQgDAZgFASQgCAHgPAYQgJAOgCAKIAAAGQgBAYgXAAIgBAAg");
	this.shape_48.setTransform(140.6,183.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#363030").s().p("ADvBnQgRgKgOgNQgGABgGgBQgOgDgGgLQgHgCgGgFIgBAAQgJAAgGgEQgFACgGAAQgPAAgGgNQgHAFgKABQgGAAgFgDQgHAEgLgDQgLgEgEgHQgGgCgDgDQgIgCgEgFIgBgCIgDAAIgBAAIAAAAQgGAEgKgCIAAAAIgEAGQgFAJgJACQgJADgKgFIgOgHQgLgFgBgNIAAgBQgHADgKgCIgFgCIgBACQgHAWgWgFQgKAOgRgDQg+gIhCgRQgYgGAHgXQAGgYAYAGIAKACIACgLQADgWADgJQAMgkAcgBQAYgBAMARQAGgQASAAQARABAGAPIAGgBQAPAAAGAJQAFgCAGAAQAHAAAFADIACgDQAIgOARACQASACADAQIABAIIAFABQANAEAFAMIAAAAIAAAAIAAAAQAJgGAKADQAJACAFAHQAEACADACQALAEAFAJQAHgBAGAEQAFgBAGACIAIADQAKgFAMAFQAIACAEAGIAIAAQAHABAFADQAOACAFAPIABACIAGADIADABQAGABAFADIAFAAQAOABAIALQAPAVAWALQAVAMgMAVQgIAOgMAAQgHAAgHgEgACMgPIAAAAIAAAAg");
	this.shape_49.setTransform(165.1,129.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#363030").s().p("AAJAxQgKgDgEgJQgOgbgQgVQgGgIAEgLQADgLAIgFQAJgFAKADQAIADAGAIQASAaAMAXQAEAKgCAJQgCAKgJAFQgGAEgHAAIgGgBg");
	this.shape_50.setTransform(222.9,155.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#363030").s().p("AgEApQgJgBgGgHQgGgHAAgJQAAgRgCgPQAAgKAIgIQAHgHAKAAQAJgBAIAIQAEAFACAGQAIAIgBAJIgFAcQgCAJgIAGQgHADgHAAIgDAAg");
	this.shape_51.setTransform(227.6,179.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#363030").s().p("ACBCyQgNgRgNgyQgzglgrguIAAAAQgLAWgWgLIgDgCQghgRgQghQgIADgKgEQgGgDgEgEQgGADgJgCQgRgDgKgIQgLgHgHgQQgFgKADgKQgcgXAIgaQACgHAEgFIgPgDIgGgBQgVgDADgYQAEgYAUACQAXADA1ADQAvAGAWAVQAMAMAFAPQAzAEAsAWIAOAHQARACARAJQAiAUAIAoIABAEQAWASAPAcQAMAZARBAQAHAXgZAHQgVAGgHgRIACAfQABAUgSADIgIABQgNAAgIgLg");
	this.shape_52.setTransform(204.3,143.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#363030").s().p("AEiB1Qh4hSioguQhzghjDgdQgYgDAHgYQAHgYAXADQDGAdB3AiQCrAxB6BTQAUANgMAWQgIANgKAAQgHAAgIgFg");
	this.shape_53.setTransform(187.5,128.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#363030").s().p("AgaCSQgYgHAGgXQAgh0AJh6QACgYAYAAQAZAAgCAYQgJCBgiB6QgEASgQAAIgJgBg");
	this.shape_54.setTransform(227.6,198.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#363030").s().p("AA+CmQgZAAgCgYQgNiVhjhxQgQgSASgSQARgSAQASQBxCAAOCqQACAYgYAAIgBAAg");
	this.shape_55.setTransform(216,168.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#363030").s().p("AGaDaQgOgugtgkQgagVg+ghQh6hAhXgfQh1gshrgGQh7gGhmAtQgWAKgLgUQgMgTAUgOIAGgFQgOADgIgKQgqg2Ajg0IAIgKIAAgMQAAgZAZAAQAMAAAGAGQAWgJAcgBQAMAAAHAKQAIAKgDAMIgBAEQABAGgCAHIgPAqQgDAKgGAFIgCALIAEgDQAWgMAMAVQADAFABAFQBBgNBIAEQB5AGCCAzQB5AuB1BCQA0AeAfAfQAnAnAOAwQAHAYgYAGIgKACQgQAAgFgTg");
	this.shape_56.setTransform(176,142.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#363030").s().p("AhqBGQgWgMAOgUQAjgxAXgXQAognAngBQARgBAMALQAGAGACAHQAPgDAOgDQAYgDAHAYQAGAYgYAEQgmAGgdALQgHADgGAAIgeAZQgTAPgRgQIgEgEIgXAfQgIAMgMAAQgHAAgIgFg");
	this.shape_57.setTransform(111,129.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#363030").s().p("ArCFLQADiEAchhQgDgJAGgKIAFgIQASg2AagpQBKh5CmhhIADgBQADgQAOgEQC5g+DBggQAYgEAGAXIABADIAxgGQA5gFAtACQAsACA2AOQAfAJA/ATQA4ARB0AWQBgAbAtBDQANAUgVANQgWAMgNgUQgog6higXQhygSgxgQQg3gSgggHQgwgMgrAAIgbAAIgFABIgYAEQAHAGACALQADASgPAGIgeAMIAfgDQAWgDAHATIAXgDQASgCAFAUIABAKIAGgBQAYgDAHAXQAHAYgYAFQg0ALh7A3QhpAwhFAGIgFAEQgKAHgMgFIAAgBIgBABQgrALgWgcQgEgFgFgNQgFgMgEgGQgDgEgJgIQgFAEgJAAIgEAAQhmA2hhBGQgLAJgLgGQhDA/g3BNQgHAJgIADQgVBAgFBFQgCAYgYAAIgBAAQgYAAABgYgAjXiaIABAFIAAALQAEgNAIgNIgNAKgAigi6IgKAFIAHAEIAEgHIADgEIgEACgAiMjEQAGAAAGADQAIgOARACQAGABAFADIAFgOQgcAIgZALg");
	this.shape_58.setTransform(122.1,149.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#363030").s().p("AtTH8QAIhCgEhcIgKifQgLjEAqh0QBTjiD+hmQDBhOEfgDQERgDEMA7QBxAZBJAoQBeA0AtBSQALAWgVAMQgWANgLgVQgwhZhxgwQhIgeiLgZQkOgwkDALQiNAHhoAXQiDAdhjA8QhhA6g+BZQhBBcgQBsQgOBZAMCrQANCygKBSQgDAYgZAAQgZAAADgYg");
	this.shape_59.setTransform(134.8,165.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#363030").s().p("AgPB3QgYgHAGgXQAdhggOhRQgDgXAXgHQAYgHAEAYQAQBfgfBsQgFASgPAAIgKgBg");
	this.shape_60.setTransform(220.2,155.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#363030").s().p("AsAG0IgqgtQgQgSASgSQANgNANAHIgJheQgHhdAChGQABgtACgWQAFgjALgcQAWgzAegtQBAhcBjhHQBahABwgpIADgBQAKgEAKAGIAEAEIAFAGQADAGgBAGIAAAGQgBAzA+gJQARgDBQgdQBOgeBDgTQCXgqCWAPQCZAPCBAuQCXA2BiBZQASARgSARQgSASgRgQQg8g3hUgnQhDgghfgbQjEg2idARQhKAIhiAhQhvApg4ASQg6AUgvgXQgdgOgLgbQgMACgKgFQhQAihDAxQheBEg6BZQgrBDgIAsQgFAcgBAnIAABDQACA6AHBNIANCHQACAQgRAGQgGADgFAAQgKAAgHgIg");
	this.shape_61.setTransform(133.2,180.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DA735C").s().p("AA4BlQgcgHgOgYIgEgIQglgpgZgqQgPgZgDgMQgFgUANgRQAFgHAJACQAJABAAAKIAAALQAIACAAAKQgBALAEALIADAGIAeAqQAHAJAIAQQANASADAIIABAEQAMAPAOADQAMADgEAMQgDAKgIAAIgEgBg");
	this.shape_62.setTransform(46.4,235);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DA735C").s().p("AAsB0QgTgZgXglIgng/IgXglQgJgVAIgUQARglAmAGQAkAGAOAjQADAGgDAEQABAEgDAFQAFARgCAQQAAAFgGAUQgFAOACAKQACAPAKAZIARAnQADAJgJAFQgEADgDAAQgFAAgDgEgAAMhWQAIABAJAEIgHgFQgJgGgHAAIAGAGg");
	this.shape_63.setTransform(46.5,232.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DA735C").s().p("Ag2BgQgGgLAKgGQASgMAPglIABgDQgHgFAFgJIALgVQgIgEADgKIAEgIIgEgBQgLgHAHgKQANgWAKgLQAPgPATgFQAIgCAFAHQAFAGgEAHIgJAPQAGAFgDAHQgGATgPAYIgLARIgRAsQgPAmgWAOQgEACgDAAQgGAAgEgGg");
	this.shape_64.setTransform(228.8,232.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DA735C").s().p("AhJBhQABgKAOgXQAMgTAFgOQAGgQgBgUQAAgaADgJQADgMAJgIQAAgEACgEQAGgJALgVQAJgRAQgEQAOgEANAIQANAHAGANQAJATgIAYQgFAOgQAYQgLAPgQAfQgSAigHANQgNAWgbAOQgKAGgHAAQgOAAABgYgAAMhIIgHANQACAIgHAFQgNAJABAgQABAmgEAIQgFAPgUAaQgKATAKgNQAKgLAGgKIAUgnQALgaAIgLQAWgZACgKQgLgogIAAQgEAAgEAMg");
	this.shape_65.setTransform(229.9,230.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#363030").s().p("AAFA/QgcgBgTgGQgWgIgUgQQgYgRgLgLQgSgSADgTQABgJAMgEQAUgHAggDIA2gDQA/gFBFACQASAAAAATQAAATgSgBQhUgBhLAHIgmAFIABACQAJAEANAMQANANALAEQAJAEAdABQASAAAAATQAAASgRAAIgBAAg");
	this.shape_66.setTransform(133.9,273.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DA735C").s().p("AgDAwQhqgBhOgvQgUgMAMgVQANgWAVANQBEAqBfgBQBTAABVgfQAXgIAGAYQAHAWgXAJQhbAhhbAAIgEAAg");
	this.shape_67.setTransform(140.2,295);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#363030").s().p("AhGAYQgFgMAWgJIBAgdQAJgEALgBQANgBAFAGQAPgCAGAHQAFAGgHAIQgFAGgIACQgyARgrALQgKADgHAAQgMAAgDgIg");
	this.shape_68.setTransform(104.9,280.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#363030").s().p("AhFAQQgJgDAEgIQADgFAHgFQAUgLAVAGQAdAJAYgMQAbgOAOAIQAHAEgDAHQgCAGgIADQgrAWgpAAQgZAAgZgHg");
	this.shape_69.setTransform(125.2,276.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#363030").s().p("ADxBTIg6gQQgcgIgbgFQgLAFgSgCQgMgBgDgEQgKACgPABQgWAAAEgLIgHAAIgQAAQgLAHgSAAQgKAAgFgDIgLACQg2AIgSABQgVABgNgDQgLgDgIgHQgHACgLABQgaACAFgRIAEgSQgOAOgRANQgJAHgUAAQgWAAAEgPIAAgBIgEAEQgJAJgXACQgaADAFgRQAPg8AlgxQAKgOAcABQAcAAgMAQIgEAGIABgBQAKgKAaABQALAAAEADQAJgGAPgDQAZgEAAATIAAAJIAMgPQAIgJAYgCQAZgCgEARIgFASIAIgMQAKgNAagCQAKgBAFACQAIgKAYgDQAXgCAAAMIAOgCIAJABQAKgFAOgBQAagBgGATIARgDQAagCgGAQIgLAbIABAAQAYgDgCASIgCAJIAGgBQAVAAgCAOIgBAFQBLALBEAfQAQAIgQANQgOAMgMABIgKAAQgXAAgagGg");
	this.shape_70.setTransform(150.4,274.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#363030").s().p("AE9BYQgTgmgMgUQgTgfgXgUQgggbgxAAIhYALQhGAHhWgGIhFgHQgBAxhOBKQgHAGgYADQgaADAFgLIADgFQgJAEgPADQgXAEABgPIAAgBQgIAGgTACQgcAEAFgMQAKgXANgVQAJghAXgZQAIgfANgMQAMgLATgGQASgGAQACQAOACAHAHQARgDAPADQAJADAHAEIBGAJQA9AHAvAAQAfABA+gJQA9gJAgABQA+ABAuAwQAhAhAiBGQAFALgcAJQgLADgIAAQgMAAgEgIg");
	this.shape_71.setTransform(138.3,272);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#363030").s().p("AFgA7QgPgBgYgNIgrgWQgZgLgXAEQgGABgNAFQgMAFgHABQgUADgdgNQgggNgQAAQgOAAgiAIQgeAGgSgCQgKgBgTgGQgUgHgJgBQgOgCgTACIgiAFQgaAEgbgCIgzgHQgLgCgaADQggAFgKABQgdABgNgOIg3AYQgYAKgOgRQgPgRAbgLIBYgnQAOgGANADQAPAEAAAPIAmgEQAngEAGABIAkAJQAVAFAQgBQAQgCAigGQAXgDAYADQARACAdAHQAWAGAkgGQArgIARABQAMAAAeANQAbAKAPgCQAPgCAZgHQAWgEATAEQAOADAjATQAgARAQAAIAlgDQAVgDASAIQAYAKgSATQgTAUgUgJQgLgFgTAEQgVAFgIAAIgBAAg");
	this.shape_72.setTransform(140.4,281.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#363030").s().p("AGJB0IhShnIgggpQgUgZgRgNQgbgUgxABQgNAAhEAHQhZAKgWABQgrABhIgNQhPgPgigBQg9gDgcA2IgWAwQgNAfgPARQgHAJgbADQgbACAJgKQAOgRANglQAOgoALgPQAZgkA3gTQA0gRBFAJQAoAGBSAPQAyAGBsgOQBngNA3AJQAgAGAaAXQAOAMAeAmIBjB8QAIAKgcAJQgOAFgJAAQgIAAgDgEg");
	this.shape_73.setTransform(141.3,273.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#363030").s().p("ACoAqQhMg4hfAAQhdAAhRA1QgPAKgWgFQgVgFAWgPQBlhCB1gDQB8gDBdBEQALAJgaALQgQAGgKAAQgIAAgFgEg");
	this.shape_74.setTransform(104.4,195.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#363030").s().p("AjOAnQgWgLAGgFQBWhMCEALQBvAJBsBAQASALgSAAQgSgBgKgGQhZg1hhgCQhpgChJBBQgDACgFAAQgHAAgOgGg");
	this.shape_75.setTransform(171.8,193.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#020203").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_76.setTransform(173.1,215.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3DAD4F").s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_77.setTransform(173.1,215.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AiDBAQg3gaAAgmQAAglA3gaQA2gcBNABQBOgBA2AcQA3AaAAAlQAAAmg3AaQg2AbhOAAQhNAAg2gbg");
	this.shape_78.setTransform(173.1,214.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DA735C").s().p("AiDBSQg3giAAgwQAAgvA3giQA2giBNAAQBOAAA2AiQA3AiAAAvQAAAwg3AiQg2AihOAAQhNAAg2gig");
	this.shape_79.setTransform(173.1,212);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#020203").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_80.setTransform(107,215.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3DAD4F").s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_81.setTransform(107,215.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AiEBAQg3gaAAgmQAAglA3gaQA3gcBNABQBOgBA3AcQA3AaAAAlQAAAmg3AaQg3AbhOAAQhNAAg3gbg");
	this.shape_82.setTransform(107,214.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DA735C").s().p("AiEBSQg3giAAgwQAAgvA3giQA3giBNAAQBOAAA3AiQA3AiAAAvQAAAwg3AiQg3AihOAAQhNAAg3gig");
	this.shape_83.setTransform(107,212);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C9846F").s().p("AACB4Qgkg6gPgmQgYg8AOgsQANglAkgLQAlgMAdAaQASAQgSASQgSASgSgQQgSgQgJAYQgIAUADARQACAOAKAZQAQAsAdAsQANAVgVAMQgJAGgHAAQgLAAgIgNg");
	this.shape_84.setTransform(41.8,228.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C9846F").s().p("AA5CaIhGhBQgZgZgQgWQgSADgGgPQgmhWAZhYQAEgOAOgDQANgDALAJIAEAEQAHgGALACQAOADAGAKQAVgIAYAHQAgAKAPAgQAKAWgVANQgWAMgKgWQgGgNgHgHIADAPQAEAXADArIgBAAIABAHQABAHgCAEIACAaQABASgRAFIBFBDQARARgSASQgJAJgJAAQgIAAgJgJg");
	this.shape_85.setTransform(51.1,237.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C9846F").s().p("ABgDCQhgg1gwgsQhIhCgMhQQgFglAJghQAKglAagVQAegZApAHQAdAFApAYQAVANgNAVQgMAWgVgMQgcgSgQgEQgbgGgSASQgSASgBAjQgBAyAjAyQAcAoAxAjQAbASBDAkQAWAMgNAVQgIAOgMAAQgHAAgHgDg");
	this.shape_86.setTransform(49.5,237);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C9846F").s().p("ABKC0QhEg7g0hMQgfgrgOgZQgXgrgDgjQgEghASgXQARgYAhgFQAdgDAcAQQAUALAdAaQARAQgRASQgSARgSgQIgRgSQgMgMgIAAIguAjQAFARAHAOQAPAgAbAnQAuBJBMBCQASAQgSARQgJAJgJAAQgJAAgJgHg");
	this.shape_87.setTransform(50.1,233.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C9846F").s().p("AgjBPQgVgNAJgWIAzhxQAKgWAVANQAWAMgKAWIgyByQgGAOgLAAQgHAAgIgFg");
	this.shape_88.setTransform(229.2,231.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C9846F").s().p("AhJCyQgVgJAHgUIAFgOQgIAEgNgFQgVgJAHgUQAOgrASgnQgRgIAEgTIAFgRQgIgKAEgMQASg3AignQArgxAxAIQAyAHAQA0QAMAogKA2QgEAXgYgGQgFgCgEgCQglBehBBHQgGAHgHABIgFAHQgHAMgMAAQgFAAgHgCgAgDgJIgWAvIgIAOIAEgFQATgjAQghIAOgZIAAAAQgKAIgNAdg");
	this.shape_89.setTransform(229.6,229.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C9846F").s().p("AhxC6QgKgRAOgNQA4g0AYgbIAOgPIABgCIAYghQAPgVAKgUQATgogFgqQgEgmgbgGQgDADgEAFQgUAKgbAcIgWAZQgBAXAHAbQAHAWgYAHQgYAGgHgWQgGgVgCgTIgBgBQgSgSAQgSIAEgGIABgFQAJgwAkgaQAggYAkABQAQgHAPAAQAlgCAYAgQAVAegBAmQAAAqgYAuQgHANgMASIgJAQQgNAUgUAYQgdApgRAVQgkAsglANIgIACQgMAAgIgOg");
	this.shape_90.setTransform(230.4,233.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DA735C").s().p("AgwAjQgYgVgWgjQgMgUAVgNQAWgMAMAUIACACIAEAEIAYAZQALAKAJAFIAJgDQAGgDAIgLQANgSAbgNQAPgIAMAKQAMAKgDAQQgCANgNAKIgWASIgUAXQgLALgOADIgMACQgYAAgcgZg");
	this.shape_91.setTransform(138.9,258.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DA735C").s().p("AAOArQgTgIgMgOQgFgHgBgIIgCgCIAAAAIAAAAIAAAAIgBAAQgKgCgFgIQgFgKACgJQACgKAKgFQAJgFAKACQAOAEAOAPIAXAZQAOAMgLASQgIAOgLAAQgEAAgEgCg");
	this.shape_92.setTransform(135.4,258.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DA735C").s().p("AhMB7QgJgHABgMIgBhCQAAgwAFghQAQhiBFAIQBFAIAGBUQABAPgBA4QgBArAGAUQAGAXgYAHQgYAHgGgYQgHgXAFg8QAEg2gLgaQgNgbgRAFQgRAGgIAcQgDALgBAQIAAAbIgDBPIACAGIACAJQAGAXgZAHIgJABQgNAAgFgLg");
	this.shape_93.setTransform(139.4,224.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DA735C").s().p("AgxAMQgHgWAXgGQAUgEAJANQAAgOgDgVQgEgWARgHQAJgEAJADQAKADADAIQAMAaACAbQACAcgKAZQgDAJgGAFQgIAMgPACIgHABQghAAgUg+g");
	this.shape_94.setTransform(148.4,254);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DA735C").s().p("AgNDEQgNgLAEgPQAIgcgQAOQgUAWgFAEIgDADIgCADQgKANgPAAQgLAAgHgGQANAIASgKQgIADgHgBQgPAAgKgIQAEAFAFADQgGgDgFgIIgFgGQgKgNgCgWQgBgNALgGIACgFIADgEIAAgGQACgYAZAAQASAAAEAMQgDgNADgQIASg9IA5i/QAGgUAVADQAVADABAVIAAAKQAKAFADAKQAHAYgEAdIgCANQAPAHgDAUIgCAMQAEADADAFQALATgCAgIAAAAQAJASgCAXQAHAEACALQAHAkALAmQAHAYgYAGQgYAHgHgYIgFgPQgGACgIgCIgEgBQgEADgFABIgCAPQgCAUgSAEQgGAJgJAHQgGAFgHAAQgGAAgIgHg");
	this.shape_95.setTransform(137,239.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DA735C").s().p("AAODNQgXgBAAgZQAAgZAXABQAKABgNgxIgPg0QgKgfgKgnQgKgpgIgoIgFglQgEgXgIgLQgOgUAVgMQAWgNAOAUQANASAFAjIAJA5QAQBMAWBBQARA2AAAkQgBA4gvAAIgEAAg");
	this.shape_96.setTransform(146.3,237.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DA735C").s().p("AhaDPQgYgHAHgXIBek3IAOgvQAMgZAYgCQAjgCAgAvQAOAUgWANQgWANgNgUQgNgTgIAQQgEAIgEATIhbEwQgFASgQAAIgKgCg");
	this.shape_97.setTransform(135,235.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DA735C").s().p("AgKDlQgIgGgHgaQgGgZgHgDQgCgBgaAJQgbAKgIgCQgOgEgJgKQgHgJgGgQQgDgHAEgJQADgIAHgEIAUgLIADgCQAshnAZhvQAGgzAJgcQAPgyAkACQAWACAOAgQAKAXAGApIALBCIAbCFIAMA0QAIAfgDAUQgEAggaAGQgbAHgSgcIgHgKQgDAJgDARQgFAOgEAHQgGALgKAEQgIAEgHAAQgLAAgKgIgAgHB/QAIAHAHAMIADAIIAGgQQAIgTAPgHQASgIATAMIAGAFQAIArACgTQABgOgLgKIgCgIIgujmQgEghgGgOQgBgCAAgCQAAgBgBAAQAAgBAAAAQAAAAAAABIABASQgGBIgdBZQgSAygbBAIAPgFIAHgBQAPAAAMAJg");
	this.shape_98.setTransform(137.9,239.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3A3635").s().p("AkEDxQhpiCh/jJQAugUBbgUIjKgrID7kfIAMBpQASCCAdB7QBdGICoCrQBBiABfmUIBTl7IEtDIIjEAUIBbBIIgwBgQg7Byg5BhQi2E0hdAEIgDAAQheAAixjcg");
	this.shape_99.setTransform(140.6,386.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EDEDED").s().p("Ag3B/Qg8g1gWg2QBQgiBRhRIBDhKIAuAlQAFATgMAQIiCELQgYgQgfgbg");
	this.shape_100.setTransform(152.7,352.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EDEDED").s().p("AiKhhQgIgLADgNIAug0IBHBPQBXBVBUAhQgXA2g9A2QgeAagaARg");
	this.shape_101.setTransform(124.4,352);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#23284F").s().p("AhcgHIAmgWIB/AeIAUAdg");
	this.shape_102.setTransform(139.8,363.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#23284F").s().p("AhhAUIDChBIACAcIjFA/g");
	this.shape_103.setTransform(141.1,419.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#23284F").s().p("AhjAVIDGhDIACAdIjJBAg");
	this.shape_104.setTransform(139.7,405.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#23284F").s().p("AhdAWIC6hFIACAdIi+BCg");
	this.shape_105.setTransform(139.6,395.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1C1A34").s().p("Ag2BGQgdgFgcgLIgWgJIBBh2IBEAAIAeAJQAlAMAYANQBQAqhDAqQgvAdg8AAQgYAAgbgEg");
	this.shape_106.setTransform(140.7,362.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#23284F").s().p("AhXAVICuhDIACAdIixBAg");
	this.shape_107.setTransform(139.4,381.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#23284F").s().p("AhPAKIBMgeIBVgPIAAAFIijBCg");
	this.shape_108.setTransform(139.3,371.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1C1A34").s().p("AhtC/IAZoMICdAAIAkItIhcBug");
	this.shape_109.setTransform(140.1,399.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DDDDDD").s().p("AjHDpIhglQIgmkgIAbgqIAhggIEMCSIEIiLIBLBzIifJAIiWDpg");
	this.shape_110.setTransform(139.5,386.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#191919").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_111.setTransform(141.9,531.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#191919").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_112.setTransform(141.2,508.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#191919").s().p("AgWAXQgJgKAAgNQAAgNAJgIQAKgKAMAAQANAAAKAKQAJAIAAANQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_113.setTransform(141.2,485.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#232222").s().p("ALGSdIgvwIIAXPYIpDACQgSAAgOgMQgOgNgCgSIgZjHIgbC/QgDAWgQAPQgQAOgXABIojABIAkz9Ig/UpIk/gGIgz9mIK2nNIEqEDIE3j7IKVFVIAbfcg");
	this.shape_114.setTransform(139.4,461.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C9846F").s().p("AAyD9IgOg2QgIhXACgYQgGhRgihBIghgxIgdBrQgeBhgGg3QgHg2AXiCIAYh4IB+AUIA1C/IgHBDQgKBWgNBdQgKBEgLAAQgFAAgFgKg");
	this.shape_115.setTransform(225.3,599.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DA735C").s().p("AglA+IA9h9IAOBAIgfAkQgZAbgNAAQgDAAgDgCg");
	this.shape_116.setTransform(224.5,606.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DA735C").s().p("AgjA+QgNgKAlg6IAlg5IANA/IgeAlQgZAbgNAAQgEAAgCgCg");
	this.shape_117.setTransform(226.3,613.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C9846F").s().p("AhdDJQgPhfgLhZIgJhFIA+jEICRgUIAdB6QAbCGgIA4QgIA4gjhjIghhuIgnAyQgmBCgIBUQADAYgKBZIgRA4QgFAJgFAAQgNAAgMhEg");
	this.shape_118.setTransform(60.1,602.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#DA735C").s().p("AgHAmIgkglIAPhBIBIB/QgDACgEAAQgPAAgdgbg");
	this.shape_119.setTransform(61,610.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#DA735C").s().p("AgJAmIgkgmIAQhAIArA6QAqA8gOAJQgDACgEAAQgPAAgdgbg");
	this.shape_120.setTransform(58.9,616.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#191919").s().p("AoKIjIgyvjIR5huIgNRRIoSAAIgepBIgOJNg");
	this.shape_121.setTransform(143.2,598.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C9846F").s().p("Ak2OuQiehDh6h6Qh6h6hDieQhFijAAizIAAoKQAAj/C2i3QC2i2EAAAIHJAAQEAAAC2C2QC2C3AAD/IAAJJQAACmhACYQg/CShxByQhxBxiTA+QiYBBimAAQixAAikhGg");
	this.shape_122.setTransform(138.6,227.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#DA735C").s().p("Ah8CtQg3gRgogeIAAhRIABgPQgBgHgFgHQgGgTgPgOQgPgQgTgGIgDgCQAVhBBOgqQBOgqBnAAQB2AABTA4QBVA4AABOIAAADQgeAOgKAJQgRANAAAWIAAA1QgnAkg8AVQg8AUhGAAQhAABg6gTg");
	this.shape_123.setTransform(138.3,320.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C9846F").s().p("AjfITIAAwlIG/AAIAAQlg");
	this.shape_124.setTransform(138.6,336.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#232222").s().p("AvwSfIg09mIK3nNIEpEDIE4j7IGFDYIAKjwIGaBkIAHD0QAEEkgNDsQgpLyjFhXQiNg+gsizIgCEyIgELVIpDACQgTAAgNgMQgNgNgDgSIgYjHIgbC/QgDAWgRAPQgRAOgWABIokABIAkz9Ig/Upg");
	this.shape_125.setTransform(145.8,460.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#232222").s().p("AwtSfIgz9mIK2nNIEqEDIE3j7IGFDYIAKjwIIcBxIgODyQgUEighDqQhqLrjFhXQiNg+gsizIgCEyIgELVIpCACQgSAAgOgMQgOgNgCgSIgZjHIgbC/QgDAWgRAPQgQAOgXABIojABIAkz9Ig/Upg");
	this.shape_126.setTransform(151.9,460.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#232222").s().p("A0KWnIg09mIK2nNIEqEDIE4j7IKUFVICCCEIDpwBIFmCOIgQCQQgXCzgfCrQhlImiWESQg9ArkfgRIkTgZQgCAABFJaIBFJaIsFDCQgTAAgOgMQgOgNgCgSIgZjHIgbC/QgDAWgQAPQgRAOgXABIojABIAkz+Ig/Uqg");
	this.shape_127.setTransform(174,434.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#191919").s().p("Ak6gxIgZJPIpygZIgzvkIR6huIN3IZIjoKCg");
	this.shape_128.setTransform(187.6,601.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#191919").s().p("AkEJvQh+g1gNjcQgNjcBskBQBrkCCmiRQCmiQB+A1QAXAKAUAPQBVBFALCyQALCxhDDIQgRAxgVAzQhsECimCRQh5BqhkAAQglAAgigOg");
	this.shape_129.setTransform(259.5,656.3);

	this.instance_7 = new lib.Tween31("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(171.8,410);
	this.instance_7._off = true;

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#232222").s().p("AQ9V6IgvwIIAXPYIpDACQgTAAgNgMQgOgNgDgSIgYjHIgbC/QgDAWgRAPQgRAOgWABIqJifIA81jIqKDqInG0SIFxicIEjOOIBZgHIK2nNIEpEDIE5j7IKVFVIAbfcg");
	this.shape_130.setTransform(253.2,432.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#191919").s().p("AFuIpIiHolIwPFoIhknBIKfllIR6huIgNRRg");
	this.shape_131.setTransform(261,590.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#191919").s().p("AAWISQgWgUgXgaQg2g+guhSQg6hogtiHQgtiFgRh5QgNhhAEhZQAHiGAsg/QAWgfAfgOQAfgOAjAGQBGANBRBeQAzA6AsBNQA+BqAuCNQAwCMAQB/QALBagEBTQgCAmgEAgQgWCKhMAiQgWAKgXAAQg6AAhFg+g");
	this.shape_132.setTransform(192.3,638.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_124,p:{x:138.6,y:336.3}},{t:this.shape_123,p:{x:138.3,y:320.7}},{t:this.shape_122,p:{x:138.6,y:227.8}},{t:this.shape_121,p:{x:143.2,y:598.1}},{t:this.shape_120,p:{x:58.9,y:616.8}},{t:this.shape_119,p:{x:61,y:610.2}},{t:this.shape_118,p:{x:60.1,y:602.9}},{t:this.shape_117,p:{x:226.3,y:613.1}},{t:this.shape_116,p:{x:224.5,y:606.7}},{t:this.shape_115,p:{x:225.3,y:599.6}},{t:this.shape_114,p:{x:139.4,y:461.7}},{t:this.shape_113,p:{x:141.2,y:485.7}},{t:this.shape_112,p:{x:141.2,y:508.6}},{t:this.shape_111,p:{x:141.9,y:531.7}},{t:this.shape_110,p:{x:139.5,y:386.4}},{t:this.shape_109,p:{x:140.1,y:399.9}},{t:this.shape_108,p:{x:139.3,y:371.5}},{t:this.shape_107,p:{x:139.4,y:381.8}},{t:this.shape_106,p:{x:140.7,y:362.4}},{t:this.shape_105,p:{x:139.6,y:395.3}},{t:this.shape_104,p:{x:139.7,y:405.9}},{t:this.shape_103,p:{x:141.1,y:419.9}},{t:this.shape_102,p:{x:139.8,y:363.8}},{t:this.shape_101,p:{x:124.4,y:352}},{t:this.shape_100,p:{x:152.7,y:352.5}},{t:this.shape_99,p:{x:140.6,y:386.9}},{t:this.shape_98,p:{x:137.9,y:239.5}},{t:this.shape_97,p:{x:135,y:235.1}},{t:this.shape_96,p:{x:146.3,y:237.5}},{t:this.shape_95,p:{x:137,y:239.7}},{t:this.shape_94,p:{x:148.4,y:254}},{t:this.shape_93,p:{x:139.4,y:224.6}},{t:this.shape_92,p:{x:135.4,y:258.2}},{t:this.shape_91,p:{x:138.9,y:258.1}},{t:this.shape_90,p:{x:230.4,y:233.9}},{t:this.shape_89,p:{x:229.6,y:229.3}},{t:this.shape_88,p:{x:229.2,y:231.2}},{t:this.shape_87,p:{x:50.1,y:233.9}},{t:this.shape_86,p:{x:49.5,y:237}},{t:this.shape_85,p:{x:51.1,y:237.5}},{t:this.shape_84,p:{x:41.8,y:228.8}},{t:this.shape_83,p:{x:107,y:212}},{t:this.shape_82,p:{x:107,y:214.2}},{t:this.shape_81,p:{x:107,y:215.1}},{t:this.shape_80,p:{x:107,y:215.1}},{t:this.shape_79,p:{x:173.1,y:212}},{t:this.shape_78,p:{x:173.1,y:214.2}},{t:this.shape_77,p:{x:173.1,y:215.1}},{t:this.shape_76,p:{x:173.1,y:215.1}},{t:this.shape_75,p:{x:171.8,y:193.8}},{t:this.shape_74,p:{x:104.4,y:195.1}},{t:this.shape_73,p:{x:141.3,y:273.7}},{t:this.shape_72,p:{x:140.4,y:281.6}},{t:this.shape_71,p:{x:138.3,y:272}},{t:this.shape_70,p:{x:150.4,y:274.6}},{t:this.shape_69,p:{x:125.2,y:276.5}},{t:this.shape_68,p:{x:104.9,y:280.4}},{t:this.shape_67,p:{x:140.2,y:295}},{t:this.shape_66,p:{x:133.9,y:273.3}},{t:this.shape_65,p:{x:229.9,y:230.9}},{t:this.shape_64,p:{x:228.8,y:232.1}},{t:this.shape_63,p:{x:46.5,y:232.8}},{t:this.shape_62,p:{x:46.4,y:235}},{t:this.shape_61,p:{x:133.2,y:180.2}},{t:this.shape_60,p:{x:220.2,y:155.6}},{t:this.shape_59,p:{x:134.8,y:165.2}},{t:this.shape_58,p:{x:122.1,y:149.4}},{t:this.shape_57,p:{x:111,y:129.1}},{t:this.shape_56,p:{x:176,y:142.3}},{t:this.shape_55,p:{x:216,y:168.6}},{t:this.shape_54,p:{x:227.6,y:198.2}},{t:this.shape_53,p:{x:187.5,y:128.2}},{t:this.shape_52,p:{x:204.3,y:143.9}},{t:this.shape_51,p:{x:227.6,y:179.7}},{t:this.shape_50,p:{x:222.9,y:155.7}},{t:this.shape_49,p:{x:165.1,y:129.6}},{t:this.shape_48,p:{x:140.6,y:183.5}},{t:this.shape_47,p:{x:110.4,y:149.8}},{t:this.shape_46,p:{x:196.4,y:154.3}},{t:this.shape_45,p:{x:166.5,y:171.1}},{t:this.shape_44,p:{x:224.9,y:171}},{t:this.shape_43,p:{x:84.8,y:139}},{t:this.shape_42,p:{x:142.9,y:110}},{t:this.shape_41,p:{x:103.3,y:117}},{t:this.shape_40,p:{x:191,y:116.2}},{t:this.shape_39,p:{x:174.6,y:116.7}},{t:this.shape_38,p:{x:92.7,y:114.5}},{t:this.shape_37,p:{x:72.7,y:150.4}},{t:this.shape_36,p:{x:77.1,y:127.2}},{t:this.shape_35,p:{x:70.2,y:131}},{t:this.shape_34,p:{x:222.7,y:163}},{t:this.shape_33,p:{x:223.5,y:151.1}},{t:this.shape_32,p:{x:231.1,y:195.9}},{t:this.shape_31,p:{x:222.3,y:207.7}},{t:this.shape_30,p:{x:152.4,y:139.3}},{t:this.shape_29,p:{x:223,y:179.7}},{t:this.shape_28,p:{x:175.4,y:135.5}},{t:this.shape_27,p:{x:68.3,y:373.5}},{t:this.shape_26,p:{x:74.8,y:370}},{t:this.shape_25,p:{x:76.7,y:388.1}},{t:this.shape_24,p:{x:83.8,y:384.7}},{t:this.shape_23,p:{x:85,y:404.9}},{t:this.shape_22,p:{x:92,y:401.4}},{t:this.shape_21,p:{x:93.1,y:421.6}},{t:this.shape_20,p:{x:100.2,y:418.1}},{t:this.shape_19,p:{x:110.1,y:442.1}},{t:this.shape_18,p:{x:114.3,y:435.5}},{t:this.shape_17,p:{x:125.9,y:452.1}},{t:this.shape_16,p:{x:130.1,y:445.4}},{t:this.shape_15,p:{x:139.2,y:459.6}},{t:this.shape_14,p:{x:102.2,y:431.8}},{t:this.shape_13,p:{x:210.5,y:368.5}},{t:this.shape_12,p:{x:203.5,y:364.3}},{t:this.shape_11,p:{x:202.1,y:383.1}},{t:this.shape_10,p:{x:194.9,y:379.4}},{t:this.shape_9,p:{x:193.8,y:400.8}},{t:this.shape_8,p:{x:186.6,y:397.1}},{t:this.shape_7,p:{x:185.5,y:418.6}},{t:this.shape_6,p:{x:178.4,y:414.9}},{t:this.shape_5,p:{x:168.4,y:440.4}},{t:this.shape_4,p:{x:164.2,y:433.3}},{t:this.shape_3,p:{x:152.5,y:450.9}},{t:this.shape_2,p:{x:148.3,y:443.8}},{t:this.shape_1,p:{x:139.1,y:458.9}},{t:this.shape,p:{x:176.4,y:429.4}}]},137).to({state:[{t:this.shape_124,p:{x:138.6,y:336.3}},{t:this.shape_123,p:{x:138.3,y:320.7}},{t:this.shape_122,p:{x:138.6,y:227.8}},{t:this.shape_121,p:{x:143.2,y:598.1}},{t:this.shape_120,p:{x:58.9,y:616.8}},{t:this.shape_119,p:{x:61,y:610.2}},{t:this.shape_118,p:{x:60.1,y:602.9}},{t:this.shape_117,p:{x:-39.7,y:551.6}},{t:this.shape_116,p:{x:-41.5,y:545.2}},{t:this.shape_115,p:{x:-40.7,y:538.1}},{t:this.shape_125},{t:this.shape_113,p:{x:141.2,y:485.7}},{t:this.shape_112,p:{x:141.2,y:508.6}},{t:this.shape_111,p:{x:141.9,y:531.7}},{t:this.shape_110,p:{x:139.5,y:386.4}},{t:this.shape_109,p:{x:140.1,y:399.9}},{t:this.shape_108,p:{x:139.3,y:371.5}},{t:this.shape_107,p:{x:139.4,y:381.8}},{t:this.shape_106,p:{x:140.7,y:362.4}},{t:this.shape_105,p:{x:139.6,y:395.3}},{t:this.shape_104,p:{x:139.7,y:405.9}},{t:this.shape_103,p:{x:141.1,y:419.9}},{t:this.shape_102,p:{x:139.8,y:363.8}},{t:this.shape_101,p:{x:124.4,y:352}},{t:this.shape_100,p:{x:152.7,y:352.5}},{t:this.shape_99,p:{x:140.6,y:386.9}},{t:this.shape_98,p:{x:137.9,y:239.5}},{t:this.shape_97,p:{x:135,y:235.1}},{t:this.shape_96,p:{x:146.3,y:237.5}},{t:this.shape_95,p:{x:137,y:239.7}},{t:this.shape_94,p:{x:148.4,y:254}},{t:this.shape_93,p:{x:139.4,y:224.6}},{t:this.shape_92,p:{x:135.4,y:258.2}},{t:this.shape_91,p:{x:138.9,y:258.1}},{t:this.shape_90,p:{x:230.4,y:233.9}},{t:this.shape_89,p:{x:229.6,y:229.3}},{t:this.shape_88,p:{x:229.2,y:231.2}},{t:this.shape_87,p:{x:50.1,y:233.9}},{t:this.shape_86,p:{x:49.5,y:237}},{t:this.shape_85,p:{x:51.1,y:237.5}},{t:this.shape_84,p:{x:41.8,y:228.8}},{t:this.shape_83,p:{x:107,y:212}},{t:this.shape_82,p:{x:107,y:214.2}},{t:this.shape_81,p:{x:107,y:215.1}},{t:this.shape_80,p:{x:107,y:215.1}},{t:this.shape_79,p:{x:173.1,y:212}},{t:this.shape_78,p:{x:173.1,y:214.2}},{t:this.shape_77,p:{x:173.1,y:215.1}},{t:this.shape_76,p:{x:173.1,y:215.1}},{t:this.shape_75,p:{x:171.8,y:193.8}},{t:this.shape_74,p:{x:104.4,y:195.1}},{t:this.shape_73,p:{x:141.3,y:273.7}},{t:this.shape_72,p:{x:140.4,y:281.6}},{t:this.shape_71,p:{x:138.3,y:272}},{t:this.shape_70,p:{x:150.4,y:274.6}},{t:this.shape_69,p:{x:125.2,y:276.5}},{t:this.shape_68,p:{x:104.9,y:280.4}},{t:this.shape_67,p:{x:140.2,y:295}},{t:this.shape_66,p:{x:133.9,y:273.3}},{t:this.shape_65,p:{x:229.9,y:230.9}},{t:this.shape_64,p:{x:228.8,y:232.1}},{t:this.shape_63,p:{x:46.5,y:232.8}},{t:this.shape_62,p:{x:46.4,y:235}},{t:this.shape_61,p:{x:133.2,y:180.2}},{t:this.shape_60,p:{x:220.2,y:155.6}},{t:this.shape_59,p:{x:134.8,y:165.2}},{t:this.shape_58,p:{x:122.1,y:149.4}},{t:this.shape_57,p:{x:111,y:129.1}},{t:this.shape_56,p:{x:176,y:142.3}},{t:this.shape_55,p:{x:216,y:168.6}},{t:this.shape_54,p:{x:227.6,y:198.2}},{t:this.shape_53,p:{x:187.5,y:128.2}},{t:this.shape_52,p:{x:204.3,y:143.9}},{t:this.shape_51,p:{x:227.6,y:179.7}},{t:this.shape_50,p:{x:222.9,y:155.7}},{t:this.shape_49,p:{x:165.1,y:129.6}},{t:this.shape_48,p:{x:140.6,y:183.5}},{t:this.shape_47,p:{x:110.4,y:149.8}},{t:this.shape_46,p:{x:196.4,y:154.3}},{t:this.shape_45,p:{x:166.5,y:171.1}},{t:this.shape_44,p:{x:224.9,y:171}},{t:this.shape_43,p:{x:84.8,y:139}},{t:this.shape_42,p:{x:142.9,y:110}},{t:this.shape_41,p:{x:103.3,y:117}},{t:this.shape_40,p:{x:191,y:116.2}},{t:this.shape_39,p:{x:174.6,y:116.7}},{t:this.shape_38,p:{x:92.7,y:114.5}},{t:this.shape_37,p:{x:72.7,y:150.4}},{t:this.shape_36,p:{x:77.1,y:127.2}},{t:this.shape_35,p:{x:70.2,y:131}},{t:this.shape_34,p:{x:222.7,y:163}},{t:this.shape_33,p:{x:223.5,y:151.1}},{t:this.shape_32,p:{x:231.1,y:195.9}},{t:this.shape_31,p:{x:222.3,y:207.7}},{t:this.shape_30,p:{x:152.4,y:139.3}},{t:this.shape_29,p:{x:223,y:179.7}},{t:this.shape_28,p:{x:175.4,y:135.5}},{t:this.shape_27,p:{x:68.3,y:373.5}},{t:this.shape_26,p:{x:74.8,y:370}},{t:this.shape_25,p:{x:76.7,y:388.1}},{t:this.shape_24,p:{x:83.8,y:384.7}},{t:this.shape_23,p:{x:85,y:404.9}},{t:this.shape_22,p:{x:92,y:401.4}},{t:this.shape_21,p:{x:93.1,y:421.6}},{t:this.shape_20,p:{x:100.2,y:418.1}},{t:this.shape_19,p:{x:110.1,y:442.1}},{t:this.shape_18,p:{x:114.3,y:435.5}},{t:this.shape_17,p:{x:125.9,y:452.1}},{t:this.shape_16,p:{x:130.1,y:445.4}},{t:this.shape_15,p:{x:139.2,y:459.6}},{t:this.shape_14,p:{x:102.2,y:431.8}},{t:this.shape_13,p:{x:210.5,y:368.5}},{t:this.shape_12,p:{x:203.5,y:364.3}},{t:this.shape_11,p:{x:202.1,y:383.1}},{t:this.shape_10,p:{x:194.9,y:379.4}},{t:this.shape_9,p:{x:193.8,y:400.8}},{t:this.shape_8,p:{x:186.6,y:397.1}},{t:this.shape_7,p:{x:185.5,y:418.6}},{t:this.shape_6,p:{x:178.4,y:414.9}},{t:this.shape_5,p:{x:168.4,y:440.4}},{t:this.shape_4,p:{x:164.2,y:433.3}},{t:this.shape_3,p:{x:152.5,y:450.9}},{t:this.shape_2,p:{x:148.3,y:443.8}},{t:this.shape_1,p:{x:139.1,y:458.9}},{t:this.shape,p:{x:176.4,y:429.4}}]},29).to({state:[{t:this.shape_124,p:{x:138.6,y:336.3}},{t:this.shape_123,p:{x:138.3,y:320.7}},{t:this.shape_122,p:{x:138.6,y:227.8}},{t:this.shape_121,p:{x:143.2,y:598.1}},{t:this.shape_120,p:{x:58.9,y:616.8}},{t:this.shape_119,p:{x:61,y:610.2}},{t:this.shape_118,p:{x:60.1,y:602.9}},{t:this.shape_117,p:{x:-39.7,y:551.6}},{t:this.shape_116,p:{x:-41.5,y:545.2}},{t:this.shape_115,p:{x:-40.7,y:538.1}},{t:this.shape_126},{t:this.shape_113,p:{x:141.2,y:485.7}},{t:this.shape_112,p:{x:141.2,y:508.6}},{t:this.shape_111,p:{x:141.9,y:531.7}},{t:this.shape_110,p:{x:139.5,y:386.4}},{t:this.shape_109,p:{x:140.1,y:399.9}},{t:this.shape_108,p:{x:139.3,y:371.5}},{t:this.shape_107,p:{x:139.4,y:381.8}},{t:this.shape_106,p:{x:140.7,y:362.4}},{t:this.shape_105,p:{x:139.6,y:395.3}},{t:this.shape_104,p:{x:139.7,y:405.9}},{t:this.shape_103,p:{x:141.1,y:419.9}},{t:this.shape_102,p:{x:139.8,y:363.8}},{t:this.shape_101,p:{x:124.4,y:352}},{t:this.shape_100,p:{x:152.7,y:352.5}},{t:this.shape_99,p:{x:140.6,y:386.9}},{t:this.shape_98,p:{x:137.9,y:239.5}},{t:this.shape_97,p:{x:135,y:235.1}},{t:this.shape_96,p:{x:146.3,y:237.5}},{t:this.shape_95,p:{x:137,y:239.7}},{t:this.shape_94,p:{x:148.4,y:254}},{t:this.shape_93,p:{x:139.4,y:224.6}},{t:this.shape_92,p:{x:135.4,y:258.2}},{t:this.shape_91,p:{x:138.9,y:258.1}},{t:this.shape_90,p:{x:230.4,y:233.9}},{t:this.shape_89,p:{x:229.6,y:229.3}},{t:this.shape_88,p:{x:229.2,y:231.2}},{t:this.shape_87,p:{x:50.1,y:233.9}},{t:this.shape_86,p:{x:49.5,y:237}},{t:this.shape_85,p:{x:51.1,y:237.5}},{t:this.shape_84,p:{x:41.8,y:228.8}},{t:this.shape_83,p:{x:107,y:212}},{t:this.shape_82,p:{x:107,y:214.2}},{t:this.shape_81,p:{x:107,y:215.1}},{t:this.shape_80,p:{x:107,y:215.1}},{t:this.shape_79,p:{x:173.1,y:212}},{t:this.shape_78,p:{x:173.1,y:214.2}},{t:this.shape_77,p:{x:173.1,y:215.1}},{t:this.shape_76,p:{x:173.1,y:215.1}},{t:this.shape_75,p:{x:171.8,y:193.8}},{t:this.shape_74,p:{x:104.4,y:195.1}},{t:this.shape_73,p:{x:141.3,y:273.7}},{t:this.shape_72,p:{x:140.4,y:281.6}},{t:this.shape_71,p:{x:138.3,y:272}},{t:this.shape_70,p:{x:150.4,y:274.6}},{t:this.shape_69,p:{x:125.2,y:276.5}},{t:this.shape_68,p:{x:104.9,y:280.4}},{t:this.shape_67,p:{x:140.2,y:295}},{t:this.shape_66,p:{x:133.9,y:273.3}},{t:this.shape_65,p:{x:229.9,y:230.9}},{t:this.shape_64,p:{x:228.8,y:232.1}},{t:this.shape_63,p:{x:46.5,y:232.8}},{t:this.shape_62,p:{x:46.4,y:235}},{t:this.shape_61,p:{x:133.2,y:180.2}},{t:this.shape_60,p:{x:220.2,y:155.6}},{t:this.shape_59,p:{x:134.8,y:165.2}},{t:this.shape_58,p:{x:122.1,y:149.4}},{t:this.shape_57,p:{x:111,y:129.1}},{t:this.shape_56,p:{x:176,y:142.3}},{t:this.shape_55,p:{x:216,y:168.6}},{t:this.shape_54,p:{x:227.6,y:198.2}},{t:this.shape_53,p:{x:187.5,y:128.2}},{t:this.shape_52,p:{x:204.3,y:143.9}},{t:this.shape_51,p:{x:227.6,y:179.7}},{t:this.shape_50,p:{x:222.9,y:155.7}},{t:this.shape_49,p:{x:165.1,y:129.6}},{t:this.shape_48,p:{x:140.6,y:183.5}},{t:this.shape_47,p:{x:110.4,y:149.8}},{t:this.shape_46,p:{x:196.4,y:154.3}},{t:this.shape_45,p:{x:166.5,y:171.1}},{t:this.shape_44,p:{x:224.9,y:171}},{t:this.shape_43,p:{x:84.8,y:139}},{t:this.shape_42,p:{x:142.9,y:110}},{t:this.shape_41,p:{x:103.3,y:117}},{t:this.shape_40,p:{x:191,y:116.2}},{t:this.shape_39,p:{x:174.6,y:116.7}},{t:this.shape_38,p:{x:92.7,y:114.5}},{t:this.shape_37,p:{x:72.7,y:150.4}},{t:this.shape_36,p:{x:77.1,y:127.2}},{t:this.shape_35,p:{x:70.2,y:131}},{t:this.shape_34,p:{x:222.7,y:163}},{t:this.shape_33,p:{x:223.5,y:151.1}},{t:this.shape_32,p:{x:231.1,y:195.9}},{t:this.shape_31,p:{x:222.3,y:207.7}},{t:this.shape_30,p:{x:152.4,y:139.3}},{t:this.shape_29,p:{x:223,y:179.7}},{t:this.shape_28,p:{x:175.4,y:135.5}},{t:this.shape_27,p:{x:68.3,y:373.5}},{t:this.shape_26,p:{x:74.8,y:370}},{t:this.shape_25,p:{x:76.7,y:388.1}},{t:this.shape_24,p:{x:83.8,y:384.7}},{t:this.shape_23,p:{x:85,y:404.9}},{t:this.shape_22,p:{x:92,y:401.4}},{t:this.shape_21,p:{x:93.1,y:421.6}},{t:this.shape_20,p:{x:100.2,y:418.1}},{t:this.shape_19,p:{x:110.1,y:442.1}},{t:this.shape_18,p:{x:114.3,y:435.5}},{t:this.shape_17,p:{x:125.9,y:452.1}},{t:this.shape_16,p:{x:130.1,y:445.4}},{t:this.shape_15,p:{x:139.2,y:459.6}},{t:this.shape_14,p:{x:102.2,y:431.8}},{t:this.shape_13,p:{x:210.5,y:368.5}},{t:this.shape_12,p:{x:203.5,y:364.3}},{t:this.shape_11,p:{x:202.1,y:383.1}},{t:this.shape_10,p:{x:194.9,y:379.4}},{t:this.shape_9,p:{x:193.8,y:400.8}},{t:this.shape_8,p:{x:186.6,y:397.1}},{t:this.shape_7,p:{x:185.5,y:418.6}},{t:this.shape_6,p:{x:178.4,y:414.9}},{t:this.shape_5,p:{x:168.4,y:440.4}},{t:this.shape_4,p:{x:164.2,y:433.3}},{t:this.shape_3,p:{x:152.5,y:450.9}},{t:this.shape_2,p:{x:148.3,y:443.8}},{t:this.shape_1,p:{x:139.1,y:458.9}},{t:this.shape,p:{x:176.4,y:429.4}}]},2).to({state:[{t:this.shape_124,p:{x:138.6,y:336.3}},{t:this.shape_123,p:{x:138.3,y:320.7}},{t:this.shape_122,p:{x:138.6,y:227.8}},{t:this.shape_121,p:{x:143.2,y:598.1}},{t:this.shape_120,p:{x:58.9,y:616.8}},{t:this.shape_119,p:{x:61,y:610.2}},{t:this.shape_118,p:{x:60.1,y:602.9}},{t:this.shape_117,p:{x:226.3,y:613.1}},{t:this.shape_116,p:{x:224.5,y:606.7}},{t:this.shape_115,p:{x:225.3,y:599.6}},{t:this.shape_114,p:{x:139.4,y:461.7}},{t:this.shape_113,p:{x:141.2,y:485.7}},{t:this.shape_112,p:{x:141.2,y:508.6}},{t:this.shape_111,p:{x:141.9,y:531.7}},{t:this.shape_110,p:{x:139.5,y:386.4}},{t:this.shape_109,p:{x:140.1,y:399.9}},{t:this.shape_108,p:{x:139.3,y:371.5}},{t:this.shape_107,p:{x:139.4,y:381.8}},{t:this.shape_106,p:{x:140.7,y:362.4}},{t:this.shape_105,p:{x:139.6,y:395.3}},{t:this.shape_104,p:{x:139.7,y:405.9}},{t:this.shape_103,p:{x:141.1,y:419.9}},{t:this.shape_102,p:{x:139.8,y:363.8}},{t:this.shape_101,p:{x:124.4,y:352}},{t:this.shape_100,p:{x:152.7,y:352.5}},{t:this.shape_99,p:{x:140.6,y:386.9}},{t:this.shape_98,p:{x:137.9,y:239.5}},{t:this.shape_97,p:{x:135,y:235.1}},{t:this.shape_96,p:{x:146.3,y:237.5}},{t:this.shape_95,p:{x:137,y:239.7}},{t:this.shape_94,p:{x:148.4,y:254}},{t:this.shape_93,p:{x:139.4,y:224.6}},{t:this.shape_92,p:{x:135.4,y:258.2}},{t:this.shape_91,p:{x:138.9,y:258.1}},{t:this.shape_90,p:{x:230.4,y:233.9}},{t:this.shape_89,p:{x:229.6,y:229.3}},{t:this.shape_88,p:{x:229.2,y:231.2}},{t:this.shape_87,p:{x:50.1,y:233.9}},{t:this.shape_86,p:{x:49.5,y:237}},{t:this.shape_85,p:{x:51.1,y:237.5}},{t:this.shape_84,p:{x:41.8,y:228.8}},{t:this.shape_83,p:{x:107,y:212}},{t:this.shape_82,p:{x:107,y:214.2}},{t:this.shape_81,p:{x:107,y:215.1}},{t:this.shape_80,p:{x:107,y:215.1}},{t:this.shape_79,p:{x:173.1,y:212}},{t:this.shape_78,p:{x:173.1,y:214.2}},{t:this.shape_77,p:{x:173.1,y:215.1}},{t:this.shape_76,p:{x:173.1,y:215.1}},{t:this.shape_75,p:{x:171.8,y:193.8}},{t:this.shape_74,p:{x:104.4,y:195.1}},{t:this.shape_73,p:{x:141.3,y:273.7}},{t:this.shape_72,p:{x:140.4,y:281.6}},{t:this.shape_71,p:{x:138.3,y:272}},{t:this.shape_70,p:{x:150.4,y:274.6}},{t:this.shape_69,p:{x:125.2,y:276.5}},{t:this.shape_68,p:{x:104.9,y:280.4}},{t:this.shape_67,p:{x:140.2,y:295}},{t:this.shape_66,p:{x:133.9,y:273.3}},{t:this.shape_65,p:{x:229.9,y:230.9}},{t:this.shape_64,p:{x:228.8,y:232.1}},{t:this.shape_63,p:{x:46.5,y:232.8}},{t:this.shape_62,p:{x:46.4,y:235}},{t:this.shape_61,p:{x:133.2,y:180.2}},{t:this.shape_60,p:{x:220.2,y:155.6}},{t:this.shape_59,p:{x:134.8,y:165.2}},{t:this.shape_58,p:{x:122.1,y:149.4}},{t:this.shape_57,p:{x:111,y:129.1}},{t:this.shape_56,p:{x:176,y:142.3}},{t:this.shape_55,p:{x:216,y:168.6}},{t:this.shape_54,p:{x:227.6,y:198.2}},{t:this.shape_53,p:{x:187.5,y:128.2}},{t:this.shape_52,p:{x:204.3,y:143.9}},{t:this.shape_51,p:{x:227.6,y:179.7}},{t:this.shape_50,p:{x:222.9,y:155.7}},{t:this.shape_49,p:{x:165.1,y:129.6}},{t:this.shape_48,p:{x:140.6,y:183.5}},{t:this.shape_47,p:{x:110.4,y:149.8}},{t:this.shape_46,p:{x:196.4,y:154.3}},{t:this.shape_45,p:{x:166.5,y:171.1}},{t:this.shape_44,p:{x:224.9,y:171}},{t:this.shape_43,p:{x:84.8,y:139}},{t:this.shape_42,p:{x:142.9,y:110}},{t:this.shape_41,p:{x:103.3,y:117}},{t:this.shape_40,p:{x:191,y:116.2}},{t:this.shape_39,p:{x:174.6,y:116.7}},{t:this.shape_38,p:{x:92.7,y:114.5}},{t:this.shape_37,p:{x:72.7,y:150.4}},{t:this.shape_36,p:{x:77.1,y:127.2}},{t:this.shape_35,p:{x:70.2,y:131}},{t:this.shape_34,p:{x:222.7,y:163}},{t:this.shape_33,p:{x:223.5,y:151.1}},{t:this.shape_32,p:{x:231.1,y:195.9}},{t:this.shape_31,p:{x:222.3,y:207.7}},{t:this.shape_30,p:{x:152.4,y:139.3}},{t:this.shape_29,p:{x:223,y:179.7}},{t:this.shape_28,p:{x:175.4,y:135.5}},{t:this.shape_27,p:{x:68.3,y:373.5}},{t:this.shape_26,p:{x:74.8,y:370}},{t:this.shape_25,p:{x:76.7,y:388.1}},{t:this.shape_24,p:{x:83.8,y:384.7}},{t:this.shape_23,p:{x:85,y:404.9}},{t:this.shape_22,p:{x:92,y:401.4}},{t:this.shape_21,p:{x:93.1,y:421.6}},{t:this.shape_20,p:{x:100.2,y:418.1}},{t:this.shape_19,p:{x:110.1,y:442.1}},{t:this.shape_18,p:{x:114.3,y:435.5}},{t:this.shape_17,p:{x:125.9,y:452.1}},{t:this.shape_16,p:{x:130.1,y:445.4}},{t:this.shape_15,p:{x:139.2,y:459.6}},{t:this.shape_14,p:{x:102.2,y:431.8}},{t:this.shape_13,p:{x:210.5,y:368.5}},{t:this.shape_12,p:{x:203.5,y:364.3}},{t:this.shape_11,p:{x:202.1,y:383.1}},{t:this.shape_10,p:{x:194.9,y:379.4}},{t:this.shape_9,p:{x:193.8,y:400.8}},{t:this.shape_8,p:{x:186.6,y:397.1}},{t:this.shape_7,p:{x:185.5,y:418.6}},{t:this.shape_6,p:{x:178.4,y:414.9}},{t:this.shape_5,p:{x:168.4,y:440.4}},{t:this.shape_4,p:{x:164.2,y:433.3}},{t:this.shape_3,p:{x:152.5,y:450.9}},{t:this.shape_2,p:{x:148.3,y:443.8}},{t:this.shape_1,p:{x:139.1,y:458.9}},{t:this.shape,p:{x:176.4,y:429.4}}]},28).to({state:[{t:this.shape_129},{t:this.shape_124,p:{x:138.6,y:336.3}},{t:this.shape_123,p:{x:138.3,y:320.7}},{t:this.shape_122,p:{x:138.6,y:227.8}},{t:this.shape_128},{t:this.shape_120,p:{x:58.9,y:616.8}},{t:this.shape_119,p:{x:61,y:610.2}},{t:this.shape_118,p:{x:60.1,y:602.9}},{t:this.shape_127},{t:this.shape_113,p:{x:141.2,y:485.7}},{t:this.shape_112,p:{x:141.2,y:508.6}},{t:this.shape_111,p:{x:141.9,y:531.7}},{t:this.shape_110,p:{x:139.5,y:386.4}},{t:this.shape_109,p:{x:140.1,y:399.9}},{t:this.shape_108,p:{x:139.3,y:371.5}},{t:this.shape_107,p:{x:139.4,y:381.8}},{t:this.shape_106,p:{x:140.7,y:362.4}},{t:this.shape_105,p:{x:139.6,y:395.3}},{t:this.shape_104,p:{x:139.7,y:405.9}},{t:this.shape_103,p:{x:141.1,y:419.9}},{t:this.shape_102,p:{x:139.8,y:363.8}},{t:this.shape_101,p:{x:124.4,y:352}},{t:this.shape_100,p:{x:152.7,y:352.5}},{t:this.shape_99,p:{x:140.6,y:386.9}},{t:this.shape_98,p:{x:137.9,y:239.5}},{t:this.shape_97,p:{x:135,y:235.1}},{t:this.shape_96,p:{x:146.3,y:237.5}},{t:this.shape_95,p:{x:137,y:239.7}},{t:this.shape_94,p:{x:148.4,y:254}},{t:this.shape_93,p:{x:139.4,y:224.6}},{t:this.shape_92,p:{x:135.4,y:258.2}},{t:this.shape_91,p:{x:138.9,y:258.1}},{t:this.shape_90,p:{x:230.4,y:233.9}},{t:this.shape_89,p:{x:229.6,y:229.3}},{t:this.shape_88,p:{x:229.2,y:231.2}},{t:this.shape_87,p:{x:50.1,y:233.9}},{t:this.shape_86,p:{x:49.5,y:237}},{t:this.shape_85,p:{x:51.1,y:237.5}},{t:this.shape_84,p:{x:41.8,y:228.8}},{t:this.shape_83,p:{x:107,y:212}},{t:this.shape_82,p:{x:107,y:214.2}},{t:this.shape_81,p:{x:107,y:215.1}},{t:this.shape_80,p:{x:107,y:215.1}},{t:this.shape_79,p:{x:173.1,y:212}},{t:this.shape_78,p:{x:173.1,y:214.2}},{t:this.shape_77,p:{x:173.1,y:215.1}},{t:this.shape_76,p:{x:173.1,y:215.1}},{t:this.shape_75,p:{x:171.8,y:193.8}},{t:this.shape_74,p:{x:104.4,y:195.1}},{t:this.shape_73,p:{x:141.3,y:273.7}},{t:this.shape_72,p:{x:140.4,y:281.6}},{t:this.shape_71,p:{x:138.3,y:272}},{t:this.shape_70,p:{x:150.4,y:274.6}},{t:this.shape_69,p:{x:125.2,y:276.5}},{t:this.shape_68,p:{x:104.9,y:280.4}},{t:this.shape_67,p:{x:140.2,y:295}},{t:this.shape_66,p:{x:133.9,y:273.3}},{t:this.shape_65,p:{x:229.9,y:230.9}},{t:this.shape_64,p:{x:228.8,y:232.1}},{t:this.shape_63,p:{x:46.5,y:232.8}},{t:this.shape_62,p:{x:46.4,y:235}},{t:this.shape_61,p:{x:133.2,y:180.2}},{t:this.shape_60,p:{x:220.2,y:155.6}},{t:this.shape_59,p:{x:134.8,y:165.2}},{t:this.shape_58,p:{x:122.1,y:149.4}},{t:this.shape_57,p:{x:111,y:129.1}},{t:this.shape_56,p:{x:176,y:142.3}},{t:this.shape_55,p:{x:216,y:168.6}},{t:this.shape_54,p:{x:227.6,y:198.2}},{t:this.shape_53,p:{x:187.5,y:128.2}},{t:this.shape_52,p:{x:204.3,y:143.9}},{t:this.shape_51,p:{x:227.6,y:179.7}},{t:this.shape_50,p:{x:222.9,y:155.7}},{t:this.shape_49,p:{x:165.1,y:129.6}},{t:this.shape_48,p:{x:140.6,y:183.5}},{t:this.shape_47,p:{x:110.4,y:149.8}},{t:this.shape_46,p:{x:196.4,y:154.3}},{t:this.shape_45,p:{x:166.5,y:171.1}},{t:this.shape_44,p:{x:224.9,y:171}},{t:this.shape_43,p:{x:84.8,y:139}},{t:this.shape_42,p:{x:142.9,y:110}},{t:this.shape_41,p:{x:103.3,y:117}},{t:this.shape_40,p:{x:191,y:116.2}},{t:this.shape_39,p:{x:174.6,y:116.7}},{t:this.shape_38,p:{x:92.7,y:114.5}},{t:this.shape_37,p:{x:72.7,y:150.4}},{t:this.shape_36,p:{x:77.1,y:127.2}},{t:this.shape_35,p:{x:70.2,y:131}},{t:this.shape_34,p:{x:222.7,y:163}},{t:this.shape_33,p:{x:223.5,y:151.1}},{t:this.shape_32,p:{x:231.1,y:195.9}},{t:this.shape_31,p:{x:222.3,y:207.7}},{t:this.shape_30,p:{x:152.4,y:139.3}},{t:this.shape_29,p:{x:223,y:179.7}},{t:this.shape_28,p:{x:175.4,y:135.5}},{t:this.shape_27,p:{x:68.3,y:373.5}},{t:this.shape_26,p:{x:74.8,y:370}},{t:this.shape_25,p:{x:76.7,y:388.1}},{t:this.shape_24,p:{x:83.8,y:384.7}},{t:this.shape_23,p:{x:85,y:404.9}},{t:this.shape_22,p:{x:92,y:401.4}},{t:this.shape_21,p:{x:93.1,y:421.6}},{t:this.shape_20,p:{x:100.2,y:418.1}},{t:this.shape_19,p:{x:110.1,y:442.1}},{t:this.shape_18,p:{x:114.3,y:435.5}},{t:this.shape_17,p:{x:125.9,y:452.1}},{t:this.shape_16,p:{x:130.1,y:445.4}},{t:this.shape_15,p:{x:139.2,y:459.6}},{t:this.shape_14,p:{x:102.2,y:431.8}},{t:this.shape_13,p:{x:210.5,y:368.5}},{t:this.shape_12,p:{x:203.5,y:364.3}},{t:this.shape_11,p:{x:202.1,y:383.1}},{t:this.shape_10,p:{x:194.9,y:379.4}},{t:this.shape_9,p:{x:193.8,y:400.8}},{t:this.shape_8,p:{x:186.6,y:397.1}},{t:this.shape_7,p:{x:185.5,y:418.6}},{t:this.shape_6,p:{x:178.4,y:414.9}},{t:this.shape_5,p:{x:168.4,y:440.4}},{t:this.shape_4,p:{x:164.2,y:433.3}},{t:this.shape_3,p:{x:152.5,y:450.9}},{t:this.shape_2,p:{x:148.3,y:443.8}},{t:this.shape_1,p:{x:139.1,y:458.9}},{t:this.shape,p:{x:176.4,y:429.4}}]},104).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.shape_124,p:{x:289.9,y:329.4}},{t:this.shape_123,p:{x:289.6,y:313.8}},{t:this.shape_122,p:{x:289.9,y:220.9}},{t:this.shape_121,p:{x:294.5,y:591.2}},{t:this.shape_120,p:{x:210.2,y:609.9}},{t:this.shape_119,p:{x:212.3,y:603.3}},{t:this.shape_118,p:{x:211.4,y:596}},{t:this.shape_117,p:{x:377.6,y:606.2}},{t:this.shape_116,p:{x:375.8,y:599.8}},{t:this.shape_115,p:{x:376.6,y:592.7}},{t:this.shape_114,p:{x:290.7,y:454.8}},{t:this.shape_113,p:{x:292.5,y:478.8}},{t:this.shape_112,p:{x:292.5,y:501.7}},{t:this.shape_111,p:{x:293.2,y:524.8}},{t:this.shape_110,p:{x:290.8,y:379.5}},{t:this.shape_109,p:{x:291.4,y:393}},{t:this.shape_108,p:{x:290.6,y:364.6}},{t:this.shape_107,p:{x:290.7,y:374.9}},{t:this.shape_106,p:{x:292,y:355.5}},{t:this.shape_105,p:{x:290.9,y:388.4}},{t:this.shape_104,p:{x:291,y:399}},{t:this.shape_103,p:{x:292.4,y:413}},{t:this.shape_102,p:{x:291.1,y:356.9}},{t:this.shape_101,p:{x:275.7,y:345.1}},{t:this.shape_100,p:{x:304,y:345.6}},{t:this.shape_99,p:{x:291.9,y:380}},{t:this.shape_98,p:{x:289.2,y:232.6}},{t:this.shape_97,p:{x:286.3,y:228.2}},{t:this.shape_96,p:{x:297.6,y:230.6}},{t:this.shape_95,p:{x:288.3,y:232.8}},{t:this.shape_94,p:{x:299.7,y:247.1}},{t:this.shape_93,p:{x:290.7,y:217.7}},{t:this.shape_92,p:{x:286.7,y:251.3}},{t:this.shape_91,p:{x:290.2,y:251.2}},{t:this.shape_90,p:{x:381.7,y:227}},{t:this.shape_89,p:{x:380.9,y:222.4}},{t:this.shape_88,p:{x:380.5,y:224.3}},{t:this.shape_87,p:{x:201.4,y:227}},{t:this.shape_86,p:{x:200.8,y:230.1}},{t:this.shape_85,p:{x:202.4,y:230.6}},{t:this.shape_84,p:{x:193.1,y:221.9}},{t:this.shape_83,p:{x:258.3,y:205.1}},{t:this.shape_82,p:{x:258.3,y:207.3}},{t:this.shape_81,p:{x:258.3,y:208.2}},{t:this.shape_80,p:{x:258.3,y:208.2}},{t:this.shape_79,p:{x:324.4,y:205.1}},{t:this.shape_78,p:{x:324.4,y:207.3}},{t:this.shape_77,p:{x:324.4,y:208.2}},{t:this.shape_76,p:{x:324.4,y:208.2}},{t:this.shape_75,p:{x:323.1,y:186.9}},{t:this.shape_74,p:{x:255.7,y:188.2}},{t:this.shape_73,p:{x:292.6,y:266.8}},{t:this.shape_72,p:{x:291.7,y:274.7}},{t:this.shape_71,p:{x:289.6,y:265.1}},{t:this.shape_70,p:{x:301.7,y:267.7}},{t:this.shape_69,p:{x:276.5,y:269.6}},{t:this.shape_68,p:{x:256.2,y:273.5}},{t:this.shape_67,p:{x:291.5,y:288.1}},{t:this.shape_66,p:{x:285.2,y:266.4}},{t:this.shape_65,p:{x:381.2,y:224}},{t:this.shape_64,p:{x:380.1,y:225.2}},{t:this.shape_63,p:{x:197.8,y:225.9}},{t:this.shape_62,p:{x:197.7,y:228.1}},{t:this.shape_61,p:{x:284.5,y:173.3}},{t:this.shape_60,p:{x:371.5,y:148.7}},{t:this.shape_59,p:{x:286.1,y:158.3}},{t:this.shape_58,p:{x:273.4,y:142.5}},{t:this.shape_57,p:{x:262.3,y:122.2}},{t:this.shape_56,p:{x:327.3,y:135.4}},{t:this.shape_55,p:{x:367.3,y:161.7}},{t:this.shape_54,p:{x:378.9,y:191.3}},{t:this.shape_53,p:{x:338.8,y:121.3}},{t:this.shape_52,p:{x:355.6,y:137}},{t:this.shape_51,p:{x:378.9,y:172.8}},{t:this.shape_50,p:{x:374.2,y:148.8}},{t:this.shape_49,p:{x:316.4,y:122.7}},{t:this.shape_48,p:{x:291.9,y:176.6}},{t:this.shape_47,p:{x:261.7,y:142.9}},{t:this.shape_46,p:{x:347.7,y:147.4}},{t:this.shape_45,p:{x:317.8,y:164.2}},{t:this.shape_44,p:{x:376.2,y:164.1}},{t:this.shape_43,p:{x:236.1,y:132.1}},{t:this.shape_42,p:{x:294.2,y:103.1}},{t:this.shape_41,p:{x:254.6,y:110.1}},{t:this.shape_40,p:{x:342.3,y:109.3}},{t:this.shape_39,p:{x:325.9,y:109.8}},{t:this.shape_38,p:{x:244,y:107.6}},{t:this.shape_37,p:{x:224,y:143.5}},{t:this.shape_36,p:{x:228.4,y:120.3}},{t:this.shape_35,p:{x:221.5,y:124.1}},{t:this.shape_34,p:{x:374,y:156.1}},{t:this.shape_33,p:{x:374.8,y:144.2}},{t:this.shape_32,p:{x:382.4,y:189}},{t:this.shape_31,p:{x:373.6,y:200.8}},{t:this.shape_30,p:{x:303.7,y:132.4}},{t:this.shape_29,p:{x:374.3,y:172.8}},{t:this.shape_28,p:{x:326.7,y:128.6}},{t:this.shape_27,p:{x:219.6,y:366.6}},{t:this.shape_26,p:{x:226.1,y:363.1}},{t:this.shape_25,p:{x:228,y:381.2}},{t:this.shape_24,p:{x:235.1,y:377.8}},{t:this.shape_23,p:{x:236.3,y:398}},{t:this.shape_22,p:{x:243.3,y:394.5}},{t:this.shape_21,p:{x:244.4,y:414.7}},{t:this.shape_20,p:{x:251.5,y:411.2}},{t:this.shape_19,p:{x:261.4,y:435.2}},{t:this.shape_18,p:{x:265.6,y:428.6}},{t:this.shape_17,p:{x:277.2,y:445.2}},{t:this.shape_16,p:{x:281.4,y:438.5}},{t:this.shape_15,p:{x:290.5,y:452.7}},{t:this.shape_14,p:{x:253.5,y:424.9}},{t:this.shape_13,p:{x:361.8,y:361.6}},{t:this.shape_12,p:{x:354.8,y:357.4}},{t:this.shape_11,p:{x:353.4,y:376.2}},{t:this.shape_10,p:{x:346.2,y:372.5}},{t:this.shape_9,p:{x:345.1,y:393.9}},{t:this.shape_8,p:{x:337.9,y:390.2}},{t:this.shape_7,p:{x:336.8,y:411.7}},{t:this.shape_6,p:{x:329.7,y:408}},{t:this.shape_5,p:{x:319.7,y:433.5}},{t:this.shape_4,p:{x:315.5,y:426.4}},{t:this.shape_3,p:{x:303.8,y:444}},{t:this.shape_2,p:{x:299.6,y:436.9}},{t:this.shape_1,p:{x:290.4,y:452}},{t:this.shape,p:{x:327.7,y:422.5}}]},1).to({state:[{t:this.shape_132,p:{x:192.3,y:638.6}},{t:this.shape_124,p:{x:289.9,y:329.4}},{t:this.shape_123,p:{x:289.6,y:313.8}},{t:this.shape_122,p:{x:289.9,y:220.9}},{t:this.shape_131,p:{x:261,y:590.6}},{t:this.shape_117,p:{x:377.6,y:606.2}},{t:this.shape_116,p:{x:375.8,y:599.8}},{t:this.shape_115,p:{x:376.6,y:592.7}},{t:this.shape_130,p:{x:253.2,y:432.7}},{t:this.shape_113,p:{x:292.5,y:478.8}},{t:this.shape_112,p:{x:292.5,y:501.7}},{t:this.shape_111,p:{x:293.2,y:524.8}},{t:this.shape_110,p:{x:290.8,y:379.5}},{t:this.shape_109,p:{x:291.4,y:393}},{t:this.shape_108,p:{x:290.6,y:364.6}},{t:this.shape_107,p:{x:290.7,y:374.9}},{t:this.shape_106,p:{x:292,y:355.5}},{t:this.shape_105,p:{x:290.9,y:388.4}},{t:this.shape_104,p:{x:291,y:399}},{t:this.shape_103,p:{x:292.4,y:413}},{t:this.shape_102,p:{x:291.1,y:356.9}},{t:this.shape_101,p:{x:275.7,y:345.1}},{t:this.shape_100,p:{x:304,y:345.6}},{t:this.shape_99,p:{x:291.9,y:380}},{t:this.shape_98,p:{x:289.2,y:232.6}},{t:this.shape_97,p:{x:286.3,y:228.2}},{t:this.shape_96,p:{x:297.6,y:230.6}},{t:this.shape_95,p:{x:288.3,y:232.8}},{t:this.shape_94,p:{x:299.7,y:247.1}},{t:this.shape_93,p:{x:290.7,y:217.7}},{t:this.shape_92,p:{x:286.7,y:251.3}},{t:this.shape_91,p:{x:290.2,y:251.2}},{t:this.shape_90,p:{x:381.7,y:227}},{t:this.shape_89,p:{x:380.9,y:222.4}},{t:this.shape_88,p:{x:380.5,y:224.3}},{t:this.shape_87,p:{x:201.4,y:227}},{t:this.shape_86,p:{x:200.8,y:230.1}},{t:this.shape_85,p:{x:202.4,y:230.6}},{t:this.shape_84,p:{x:193.1,y:221.9}},{t:this.shape_83,p:{x:258.3,y:205.1}},{t:this.shape_82,p:{x:258.3,y:207.3}},{t:this.shape_81,p:{x:258.3,y:208.2}},{t:this.shape_80,p:{x:258.3,y:208.2}},{t:this.shape_79,p:{x:324.4,y:205.1}},{t:this.shape_78,p:{x:324.4,y:207.3}},{t:this.shape_77,p:{x:324.4,y:208.2}},{t:this.shape_76,p:{x:324.4,y:208.2}},{t:this.shape_75,p:{x:323.1,y:186.9}},{t:this.shape_74,p:{x:255.7,y:188.2}},{t:this.shape_73,p:{x:292.6,y:266.8}},{t:this.shape_72,p:{x:291.7,y:274.7}},{t:this.shape_71,p:{x:289.6,y:265.1}},{t:this.shape_70,p:{x:301.7,y:267.7}},{t:this.shape_69,p:{x:276.5,y:269.6}},{t:this.shape_68,p:{x:256.2,y:273.5}},{t:this.shape_67,p:{x:291.5,y:288.1}},{t:this.shape_66,p:{x:285.2,y:266.4}},{t:this.shape_65,p:{x:381.2,y:224}},{t:this.shape_64,p:{x:380.1,y:225.2}},{t:this.shape_63,p:{x:197.8,y:225.9}},{t:this.shape_62,p:{x:197.7,y:228.1}},{t:this.shape_61,p:{x:284.5,y:173.3}},{t:this.shape_60,p:{x:371.5,y:148.7}},{t:this.shape_59,p:{x:286.1,y:158.3}},{t:this.shape_58,p:{x:273.4,y:142.5}},{t:this.shape_57,p:{x:262.3,y:122.2}},{t:this.shape_56,p:{x:327.3,y:135.4}},{t:this.shape_55,p:{x:367.3,y:161.7}},{t:this.shape_54,p:{x:378.9,y:191.3}},{t:this.shape_53,p:{x:338.8,y:121.3}},{t:this.shape_52,p:{x:355.6,y:137}},{t:this.shape_51,p:{x:378.9,y:172.8}},{t:this.shape_50,p:{x:374.2,y:148.8}},{t:this.shape_49,p:{x:316.4,y:122.7}},{t:this.shape_48,p:{x:291.9,y:176.6}},{t:this.shape_47,p:{x:261.7,y:142.9}},{t:this.shape_46,p:{x:347.7,y:147.4}},{t:this.shape_45,p:{x:317.8,y:164.2}},{t:this.shape_44,p:{x:376.2,y:164.1}},{t:this.shape_43,p:{x:236.1,y:132.1}},{t:this.shape_42,p:{x:294.2,y:103.1}},{t:this.shape_41,p:{x:254.6,y:110.1}},{t:this.shape_40,p:{x:342.3,y:109.3}},{t:this.shape_39,p:{x:325.9,y:109.8}},{t:this.shape_38,p:{x:244,y:107.6}},{t:this.shape_37,p:{x:224,y:143.5}},{t:this.shape_36,p:{x:228.4,y:120.3}},{t:this.shape_35,p:{x:221.5,y:124.1}},{t:this.shape_34,p:{x:374,y:156.1}},{t:this.shape_33,p:{x:374.8,y:144.2}},{t:this.shape_32,p:{x:382.4,y:189}},{t:this.shape_31,p:{x:373.6,y:200.8}},{t:this.shape_30,p:{x:303.7,y:132.4}},{t:this.shape_29,p:{x:374.3,y:172.8}},{t:this.shape_28,p:{x:326.7,y:128.6}},{t:this.shape_27,p:{x:219.6,y:366.6}},{t:this.shape_26,p:{x:226.1,y:363.1}},{t:this.shape_25,p:{x:228,y:381.2}},{t:this.shape_24,p:{x:235.1,y:377.8}},{t:this.shape_23,p:{x:236.3,y:398}},{t:this.shape_22,p:{x:243.3,y:394.5}},{t:this.shape_21,p:{x:244.4,y:414.7}},{t:this.shape_20,p:{x:251.5,y:411.2}},{t:this.shape_19,p:{x:261.4,y:435.2}},{t:this.shape_18,p:{x:265.6,y:428.6}},{t:this.shape_17,p:{x:277.2,y:445.2}},{t:this.shape_16,p:{x:281.4,y:438.5}},{t:this.shape_15,p:{x:290.5,y:452.7}},{t:this.shape_14,p:{x:253.5,y:424.9}},{t:this.shape_13,p:{x:361.8,y:361.6}},{t:this.shape_12,p:{x:354.8,y:357.4}},{t:this.shape_11,p:{x:353.4,y:376.2}},{t:this.shape_10,p:{x:346.2,y:372.5}},{t:this.shape_9,p:{x:345.1,y:393.9}},{t:this.shape_8,p:{x:337.9,y:390.2}},{t:this.shape_7,p:{x:336.8,y:411.7}},{t:this.shape_6,p:{x:329.7,y:408}},{t:this.shape_5,p:{x:319.7,y:433.5}},{t:this.shape_4,p:{x:315.5,y:426.4}},{t:this.shape_3,p:{x:303.8,y:444}},{t:this.shape_2,p:{x:299.6,y:436.9}},{t:this.shape_1,p:{x:290.4,y:452}},{t:this.shape,p:{x:327.7,y:422.5}}]},6).to({state:[{t:this.shape_124,p:{x:289.9,y:329.4}},{t:this.shape_123,p:{x:289.6,y:313.8}},{t:this.shape_122,p:{x:289.9,y:220.9}},{t:this.shape_121,p:{x:294.5,y:591.2}},{t:this.shape_120,p:{x:210.2,y:609.9}},{t:this.shape_119,p:{x:212.3,y:603.3}},{t:this.shape_118,p:{x:211.4,y:596}},{t:this.shape_117,p:{x:377.6,y:606.2}},{t:this.shape_116,p:{x:375.8,y:599.8}},{t:this.shape_115,p:{x:376.6,y:592.7}},{t:this.shape_114,p:{x:290.7,y:454.8}},{t:this.shape_113,p:{x:292.5,y:478.8}},{t:this.shape_112,p:{x:292.5,y:501.7}},{t:this.shape_111,p:{x:293.2,y:524.8}},{t:this.shape_110,p:{x:290.8,y:379.5}},{t:this.shape_109,p:{x:291.4,y:393}},{t:this.shape_108,p:{x:290.6,y:364.6}},{t:this.shape_107,p:{x:290.7,y:374.9}},{t:this.shape_106,p:{x:292,y:355.5}},{t:this.shape_105,p:{x:290.9,y:388.4}},{t:this.shape_104,p:{x:291,y:399}},{t:this.shape_103,p:{x:292.4,y:413}},{t:this.shape_102,p:{x:291.1,y:356.9}},{t:this.shape_101,p:{x:275.7,y:345.1}},{t:this.shape_100,p:{x:304,y:345.6}},{t:this.shape_99,p:{x:291.9,y:380}},{t:this.shape_98,p:{x:289.2,y:232.6}},{t:this.shape_97,p:{x:286.3,y:228.2}},{t:this.shape_96,p:{x:297.6,y:230.6}},{t:this.shape_95,p:{x:288.3,y:232.8}},{t:this.shape_94,p:{x:299.7,y:247.1}},{t:this.shape_93,p:{x:290.7,y:217.7}},{t:this.shape_92,p:{x:286.7,y:251.3}},{t:this.shape_91,p:{x:290.2,y:251.2}},{t:this.shape_90,p:{x:381.7,y:227}},{t:this.shape_89,p:{x:380.9,y:222.4}},{t:this.shape_88,p:{x:380.5,y:224.3}},{t:this.shape_87,p:{x:201.4,y:227}},{t:this.shape_86,p:{x:200.8,y:230.1}},{t:this.shape_85,p:{x:202.4,y:230.6}},{t:this.shape_84,p:{x:193.1,y:221.9}},{t:this.shape_83,p:{x:258.3,y:205.1}},{t:this.shape_82,p:{x:258.3,y:207.3}},{t:this.shape_81,p:{x:258.3,y:208.2}},{t:this.shape_80,p:{x:258.3,y:208.2}},{t:this.shape_79,p:{x:324.4,y:205.1}},{t:this.shape_78,p:{x:324.4,y:207.3}},{t:this.shape_77,p:{x:324.4,y:208.2}},{t:this.shape_76,p:{x:324.4,y:208.2}},{t:this.shape_75,p:{x:323.1,y:186.9}},{t:this.shape_74,p:{x:255.7,y:188.2}},{t:this.shape_73,p:{x:292.6,y:266.8}},{t:this.shape_72,p:{x:291.7,y:274.7}},{t:this.shape_71,p:{x:289.6,y:265.1}},{t:this.shape_70,p:{x:301.7,y:267.7}},{t:this.shape_69,p:{x:276.5,y:269.6}},{t:this.shape_68,p:{x:256.2,y:273.5}},{t:this.shape_67,p:{x:291.5,y:288.1}},{t:this.shape_66,p:{x:285.2,y:266.4}},{t:this.shape_65,p:{x:381.2,y:224}},{t:this.shape_64,p:{x:380.1,y:225.2}},{t:this.shape_63,p:{x:197.8,y:225.9}},{t:this.shape_62,p:{x:197.7,y:228.1}},{t:this.shape_61,p:{x:284.5,y:173.3}},{t:this.shape_60,p:{x:371.5,y:148.7}},{t:this.shape_59,p:{x:286.1,y:158.3}},{t:this.shape_58,p:{x:273.4,y:142.5}},{t:this.shape_57,p:{x:262.3,y:122.2}},{t:this.shape_56,p:{x:327.3,y:135.4}},{t:this.shape_55,p:{x:367.3,y:161.7}},{t:this.shape_54,p:{x:378.9,y:191.3}},{t:this.shape_53,p:{x:338.8,y:121.3}},{t:this.shape_52,p:{x:355.6,y:137}},{t:this.shape_51,p:{x:378.9,y:172.8}},{t:this.shape_50,p:{x:374.2,y:148.8}},{t:this.shape_49,p:{x:316.4,y:122.7}},{t:this.shape_48,p:{x:291.9,y:176.6}},{t:this.shape_47,p:{x:261.7,y:142.9}},{t:this.shape_46,p:{x:347.7,y:147.4}},{t:this.shape_45,p:{x:317.8,y:164.2}},{t:this.shape_44,p:{x:376.2,y:164.1}},{t:this.shape_43,p:{x:236.1,y:132.1}},{t:this.shape_42,p:{x:294.2,y:103.1}},{t:this.shape_41,p:{x:254.6,y:110.1}},{t:this.shape_40,p:{x:342.3,y:109.3}},{t:this.shape_39,p:{x:325.9,y:109.8}},{t:this.shape_38,p:{x:244,y:107.6}},{t:this.shape_37,p:{x:224,y:143.5}},{t:this.shape_36,p:{x:228.4,y:120.3}},{t:this.shape_35,p:{x:221.5,y:124.1}},{t:this.shape_34,p:{x:374,y:156.1}},{t:this.shape_33,p:{x:374.8,y:144.2}},{t:this.shape_32,p:{x:382.4,y:189}},{t:this.shape_31,p:{x:373.6,y:200.8}},{t:this.shape_30,p:{x:303.7,y:132.4}},{t:this.shape_29,p:{x:374.3,y:172.8}},{t:this.shape_28,p:{x:326.7,y:128.6}},{t:this.shape_27,p:{x:219.6,y:366.6}},{t:this.shape_26,p:{x:226.1,y:363.1}},{t:this.shape_25,p:{x:228,y:381.2}},{t:this.shape_24,p:{x:235.1,y:377.8}},{t:this.shape_23,p:{x:236.3,y:398}},{t:this.shape_22,p:{x:243.3,y:394.5}},{t:this.shape_21,p:{x:244.4,y:414.7}},{t:this.shape_20,p:{x:251.5,y:411.2}},{t:this.shape_19,p:{x:261.4,y:435.2}},{t:this.shape_18,p:{x:265.6,y:428.6}},{t:this.shape_17,p:{x:277.2,y:445.2}},{t:this.shape_16,p:{x:281.4,y:438.5}},{t:this.shape_15,p:{x:290.5,y:452.7}},{t:this.shape_14,p:{x:253.5,y:424.9}},{t:this.shape_13,p:{x:361.8,y:361.6}},{t:this.shape_12,p:{x:354.8,y:357.4}},{t:this.shape_11,p:{x:353.4,y:376.2}},{t:this.shape_10,p:{x:346.2,y:372.5}},{t:this.shape_9,p:{x:345.1,y:393.9}},{t:this.shape_8,p:{x:337.9,y:390.2}},{t:this.shape_7,p:{x:336.8,y:411.7}},{t:this.shape_6,p:{x:329.7,y:408}},{t:this.shape_5,p:{x:319.7,y:433.5}},{t:this.shape_4,p:{x:315.5,y:426.4}},{t:this.shape_3,p:{x:303.8,y:444}},{t:this.shape_2,p:{x:299.6,y:436.9}},{t:this.shape_1,p:{x:290.4,y:452}},{t:this.shape,p:{x:327.7,y:422.5}}]},5).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.shape_124,p:{x:461.9,y:329.4}},{t:this.shape_123,p:{x:461.6,y:313.8}},{t:this.shape_122,p:{x:461.9,y:220.9}},{t:this.shape_121,p:{x:466.5,y:591.2}},{t:this.shape_120,p:{x:382.2,y:609.9}},{t:this.shape_119,p:{x:384.3,y:603.3}},{t:this.shape_118,p:{x:383.4,y:596}},{t:this.shape_117,p:{x:549.6,y:606.2}},{t:this.shape_116,p:{x:547.8,y:599.8}},{t:this.shape_115,p:{x:548.6,y:592.7}},{t:this.shape_114,p:{x:462.7,y:454.8}},{t:this.shape_113,p:{x:464.5,y:478.8}},{t:this.shape_112,p:{x:464.5,y:501.7}},{t:this.shape_111,p:{x:465.2,y:524.8}},{t:this.shape_110,p:{x:462.8,y:379.5}},{t:this.shape_109,p:{x:463.4,y:393}},{t:this.shape_108,p:{x:462.6,y:364.6}},{t:this.shape_107,p:{x:462.7,y:374.9}},{t:this.shape_106,p:{x:464,y:355.5}},{t:this.shape_105,p:{x:462.9,y:388.4}},{t:this.shape_104,p:{x:463,y:399}},{t:this.shape_103,p:{x:464.4,y:413}},{t:this.shape_102,p:{x:463.1,y:356.9}},{t:this.shape_101,p:{x:447.7,y:345.1}},{t:this.shape_100,p:{x:476,y:345.6}},{t:this.shape_99,p:{x:463.9,y:380}},{t:this.shape_98,p:{x:461.2,y:232.6}},{t:this.shape_97,p:{x:458.3,y:228.2}},{t:this.shape_96,p:{x:469.6,y:230.6}},{t:this.shape_95,p:{x:460.3,y:232.8}},{t:this.shape_94,p:{x:471.7,y:247.1}},{t:this.shape_93,p:{x:462.7,y:217.7}},{t:this.shape_92,p:{x:458.7,y:251.3}},{t:this.shape_91,p:{x:462.2,y:251.2}},{t:this.shape_90,p:{x:553.7,y:227}},{t:this.shape_89,p:{x:552.9,y:222.4}},{t:this.shape_88,p:{x:552.5,y:224.3}},{t:this.shape_87,p:{x:373.4,y:227}},{t:this.shape_86,p:{x:372.8,y:230.1}},{t:this.shape_85,p:{x:374.4,y:230.6}},{t:this.shape_84,p:{x:365.1,y:221.9}},{t:this.shape_83,p:{x:430.3,y:205.1}},{t:this.shape_82,p:{x:430.3,y:207.3}},{t:this.shape_81,p:{x:430.3,y:208.2}},{t:this.shape_80,p:{x:430.3,y:208.2}},{t:this.shape_79,p:{x:496.4,y:205.1}},{t:this.shape_78,p:{x:496.4,y:207.3}},{t:this.shape_77,p:{x:496.4,y:208.2}},{t:this.shape_76,p:{x:496.4,y:208.2}},{t:this.shape_75,p:{x:495.1,y:186.9}},{t:this.shape_74,p:{x:427.7,y:188.2}},{t:this.shape_73,p:{x:464.6,y:266.8}},{t:this.shape_72,p:{x:463.7,y:274.7}},{t:this.shape_71,p:{x:461.6,y:265.1}},{t:this.shape_70,p:{x:473.7,y:267.7}},{t:this.shape_69,p:{x:448.5,y:269.6}},{t:this.shape_68,p:{x:428.2,y:273.5}},{t:this.shape_67,p:{x:463.5,y:288.1}},{t:this.shape_66,p:{x:457.2,y:266.4}},{t:this.shape_65,p:{x:553.2,y:224}},{t:this.shape_64,p:{x:552.1,y:225.2}},{t:this.shape_63,p:{x:369.8,y:225.9}},{t:this.shape_62,p:{x:369.7,y:228.1}},{t:this.shape_61,p:{x:456.5,y:173.3}},{t:this.shape_60,p:{x:543.5,y:148.7}},{t:this.shape_59,p:{x:458.1,y:158.3}},{t:this.shape_58,p:{x:445.4,y:142.5}},{t:this.shape_57,p:{x:434.3,y:122.2}},{t:this.shape_56,p:{x:499.3,y:135.4}},{t:this.shape_55,p:{x:539.3,y:161.7}},{t:this.shape_54,p:{x:550.9,y:191.3}},{t:this.shape_53,p:{x:510.8,y:121.3}},{t:this.shape_52,p:{x:527.6,y:137}},{t:this.shape_51,p:{x:550.9,y:172.8}},{t:this.shape_50,p:{x:546.2,y:148.8}},{t:this.shape_49,p:{x:488.4,y:122.7}},{t:this.shape_48,p:{x:463.9,y:176.6}},{t:this.shape_47,p:{x:433.7,y:142.9}},{t:this.shape_46,p:{x:519.7,y:147.4}},{t:this.shape_45,p:{x:489.8,y:164.2}},{t:this.shape_44,p:{x:548.2,y:164.1}},{t:this.shape_43,p:{x:408.1,y:132.1}},{t:this.shape_42,p:{x:466.2,y:103.1}},{t:this.shape_41,p:{x:426.6,y:110.1}},{t:this.shape_40,p:{x:514.3,y:109.3}},{t:this.shape_39,p:{x:497.9,y:109.8}},{t:this.shape_38,p:{x:416,y:107.6}},{t:this.shape_37,p:{x:396,y:143.5}},{t:this.shape_36,p:{x:400.4,y:120.3}},{t:this.shape_35,p:{x:393.5,y:124.1}},{t:this.shape_34,p:{x:546,y:156.1}},{t:this.shape_33,p:{x:546.8,y:144.2}},{t:this.shape_32,p:{x:554.4,y:189}},{t:this.shape_31,p:{x:545.6,y:200.8}},{t:this.shape_30,p:{x:475.7,y:132.4}},{t:this.shape_29,p:{x:546.3,y:172.8}},{t:this.shape_28,p:{x:498.7,y:128.6}},{t:this.shape_27,p:{x:391.6,y:366.6}},{t:this.shape_26,p:{x:398.1,y:363.1}},{t:this.shape_25,p:{x:400,y:381.2}},{t:this.shape_24,p:{x:407.1,y:377.8}},{t:this.shape_23,p:{x:408.3,y:398}},{t:this.shape_22,p:{x:415.3,y:394.5}},{t:this.shape_21,p:{x:416.4,y:414.7}},{t:this.shape_20,p:{x:423.5,y:411.2}},{t:this.shape_19,p:{x:433.4,y:435.2}},{t:this.shape_18,p:{x:437.6,y:428.6}},{t:this.shape_17,p:{x:449.2,y:445.2}},{t:this.shape_16,p:{x:453.4,y:438.5}},{t:this.shape_15,p:{x:462.5,y:452.7}},{t:this.shape_14,p:{x:425.5,y:424.9}},{t:this.shape_13,p:{x:533.8,y:361.6}},{t:this.shape_12,p:{x:526.8,y:357.4}},{t:this.shape_11,p:{x:525.4,y:376.2}},{t:this.shape_10,p:{x:518.2,y:372.5}},{t:this.shape_9,p:{x:517.1,y:393.9}},{t:this.shape_8,p:{x:509.9,y:390.2}},{t:this.shape_7,p:{x:508.8,y:411.7}},{t:this.shape_6,p:{x:501.7,y:408}},{t:this.shape_5,p:{x:491.7,y:433.5}},{t:this.shape_4,p:{x:487.5,y:426.4}},{t:this.shape_3,p:{x:475.8,y:444}},{t:this.shape_2,p:{x:471.6,y:436.9}},{t:this.shape_1,p:{x:462.4,y:452}},{t:this.shape,p:{x:499.7,y:422.5}}]},1).to({state:[{t:this.shape_124,p:{x:461.9,y:329.4}},{t:this.shape_123,p:{x:461.6,y:313.8}},{t:this.shape_122,p:{x:461.9,y:220.9}},{t:this.shape_121,p:{x:466.5,y:591.2}},{t:this.shape_120,p:{x:382.2,y:609.9}},{t:this.shape_119,p:{x:384.3,y:603.3}},{t:this.shape_118,p:{x:383.4,y:596}},{t:this.shape_117,p:{x:549.6,y:606.2}},{t:this.shape_116,p:{x:547.8,y:599.8}},{t:this.shape_115,p:{x:548.6,y:592.7}},{t:this.shape_114,p:{x:462.7,y:454.8}},{t:this.shape_113,p:{x:464.5,y:478.8}},{t:this.shape_112,p:{x:464.5,y:501.7}},{t:this.shape_111,p:{x:465.2,y:524.8}},{t:this.shape_110,p:{x:462.8,y:379.5}},{t:this.shape_109,p:{x:463.4,y:393}},{t:this.shape_108,p:{x:462.6,y:364.6}},{t:this.shape_107,p:{x:462.7,y:374.9}},{t:this.shape_106,p:{x:464,y:355.5}},{t:this.shape_105,p:{x:462.9,y:388.4}},{t:this.shape_104,p:{x:463,y:399}},{t:this.shape_103,p:{x:464.4,y:413}},{t:this.shape_102,p:{x:463.1,y:356.9}},{t:this.shape_101,p:{x:447.7,y:345.1}},{t:this.shape_100,p:{x:476,y:345.6}},{t:this.shape_99,p:{x:463.9,y:380}},{t:this.shape_98,p:{x:461.2,y:232.6}},{t:this.shape_97,p:{x:458.3,y:228.2}},{t:this.shape_96,p:{x:469.6,y:230.6}},{t:this.shape_95,p:{x:460.3,y:232.8}},{t:this.shape_94,p:{x:471.7,y:247.1}},{t:this.shape_93,p:{x:462.7,y:217.7}},{t:this.shape_92,p:{x:458.7,y:251.3}},{t:this.shape_91,p:{x:462.2,y:251.2}},{t:this.shape_90,p:{x:553.7,y:227}},{t:this.shape_89,p:{x:552.9,y:222.4}},{t:this.shape_88,p:{x:552.5,y:224.3}},{t:this.shape_87,p:{x:373.4,y:227}},{t:this.shape_86,p:{x:372.8,y:230.1}},{t:this.shape_85,p:{x:374.4,y:230.6}},{t:this.shape_84,p:{x:365.1,y:221.9}},{t:this.shape_83,p:{x:430.3,y:205.1}},{t:this.shape_82,p:{x:430.3,y:207.3}},{t:this.shape_81,p:{x:430.3,y:208.2}},{t:this.shape_80,p:{x:430.3,y:208.2}},{t:this.shape_79,p:{x:496.4,y:205.1}},{t:this.shape_78,p:{x:496.4,y:207.3}},{t:this.shape_77,p:{x:496.4,y:208.2}},{t:this.shape_76,p:{x:496.4,y:208.2}},{t:this.shape_75,p:{x:495.1,y:186.9}},{t:this.shape_74,p:{x:427.7,y:188.2}},{t:this.shape_73,p:{x:464.6,y:266.8}},{t:this.shape_72,p:{x:463.7,y:274.7}},{t:this.shape_71,p:{x:461.6,y:265.1}},{t:this.shape_70,p:{x:473.7,y:267.7}},{t:this.shape_69,p:{x:448.5,y:269.6}},{t:this.shape_68,p:{x:428.2,y:273.5}},{t:this.shape_67,p:{x:463.5,y:288.1}},{t:this.shape_66,p:{x:457.2,y:266.4}},{t:this.shape_65,p:{x:553.2,y:224}},{t:this.shape_64,p:{x:552.1,y:225.2}},{t:this.shape_63,p:{x:369.8,y:225.9}},{t:this.shape_62,p:{x:369.7,y:228.1}},{t:this.shape_61,p:{x:456.5,y:173.3}},{t:this.shape_60,p:{x:543.5,y:148.7}},{t:this.shape_59,p:{x:458.1,y:158.3}},{t:this.shape_58,p:{x:445.4,y:142.5}},{t:this.shape_57,p:{x:434.3,y:122.2}},{t:this.shape_56,p:{x:499.3,y:135.4}},{t:this.shape_55,p:{x:539.3,y:161.7}},{t:this.shape_54,p:{x:550.9,y:191.3}},{t:this.shape_53,p:{x:510.8,y:121.3}},{t:this.shape_52,p:{x:527.6,y:137}},{t:this.shape_51,p:{x:550.9,y:172.8}},{t:this.shape_50,p:{x:546.2,y:148.8}},{t:this.shape_49,p:{x:488.4,y:122.7}},{t:this.shape_48,p:{x:463.9,y:176.6}},{t:this.shape_47,p:{x:433.7,y:142.9}},{t:this.shape_46,p:{x:519.7,y:147.4}},{t:this.shape_45,p:{x:489.8,y:164.2}},{t:this.shape_44,p:{x:548.2,y:164.1}},{t:this.shape_43,p:{x:408.1,y:132.1}},{t:this.shape_42,p:{x:466.2,y:103.1}},{t:this.shape_41,p:{x:426.6,y:110.1}},{t:this.shape_40,p:{x:514.3,y:109.3}},{t:this.shape_39,p:{x:497.9,y:109.8}},{t:this.shape_38,p:{x:416,y:107.6}},{t:this.shape_37,p:{x:396,y:143.5}},{t:this.shape_36,p:{x:400.4,y:120.3}},{t:this.shape_35,p:{x:393.5,y:124.1}},{t:this.shape_34,p:{x:546,y:156.1}},{t:this.shape_33,p:{x:546.8,y:144.2}},{t:this.shape_32,p:{x:554.4,y:189}},{t:this.shape_31,p:{x:545.6,y:200.8}},{t:this.shape_30,p:{x:475.7,y:132.4}},{t:this.shape_29,p:{x:546.3,y:172.8}},{t:this.shape_28,p:{x:498.7,y:128.6}},{t:this.shape_27,p:{x:391.6,y:366.6}},{t:this.shape_26,p:{x:398.1,y:363.1}},{t:this.shape_25,p:{x:400,y:381.2}},{t:this.shape_24,p:{x:407.1,y:377.8}},{t:this.shape_23,p:{x:408.3,y:398}},{t:this.shape_22,p:{x:415.3,y:394.5}},{t:this.shape_21,p:{x:416.4,y:414.7}},{t:this.shape_20,p:{x:423.5,y:411.2}},{t:this.shape_19,p:{x:433.4,y:435.2}},{t:this.shape_18,p:{x:437.6,y:428.6}},{t:this.shape_17,p:{x:449.2,y:445.2}},{t:this.shape_16,p:{x:453.4,y:438.5}},{t:this.shape_15,p:{x:462.5,y:452.7}},{t:this.shape_14,p:{x:425.5,y:424.9}},{t:this.shape_13,p:{x:533.8,y:361.6}},{t:this.shape_12,p:{x:526.8,y:357.4}},{t:this.shape_11,p:{x:525.4,y:376.2}},{t:this.shape_10,p:{x:518.2,y:372.5}},{t:this.shape_9,p:{x:517.1,y:393.9}},{t:this.shape_8,p:{x:509.9,y:390.2}},{t:this.shape_7,p:{x:508.8,y:411.7}},{t:this.shape_6,p:{x:501.7,y:408}},{t:this.shape_5,p:{x:491.7,y:433.5}},{t:this.shape_4,p:{x:487.5,y:426.4}},{t:this.shape_3,p:{x:475.8,y:444}},{t:this.shape_2,p:{x:471.6,y:436.9}},{t:this.shape_1,p:{x:462.4,y:452}},{t:this.shape,p:{x:499.7,y:422.5}}]},3).to({state:[{t:this.shape_132,p:{x:404.7,y:640.3}},{t:this.shape_124,p:{x:502.3,y:331.1}},{t:this.shape_123,p:{x:501.9,y:315.5}},{t:this.shape_122,p:{x:502.3,y:222.6}},{t:this.shape_131,p:{x:473.3,y:592.3}},{t:this.shape_117,p:{x:589.9,y:607.9}},{t:this.shape_116,p:{x:588.2,y:601.5}},{t:this.shape_115,p:{x:588.9,y:594.4}},{t:this.shape_130,p:{x:465.5,y:434.4}},{t:this.shape_113,p:{x:504.9,y:480.5}},{t:this.shape_112,p:{x:504.9,y:503.4}},{t:this.shape_111,p:{x:505.5,y:526.5}},{t:this.shape_110,p:{x:503.1,y:381.2}},{t:this.shape_109,p:{x:503.7,y:394.7}},{t:this.shape_108,p:{x:503,y:366.3}},{t:this.shape_107,p:{x:503.1,y:376.6}},{t:this.shape_106,p:{x:504.3,y:357.2}},{t:this.shape_105,p:{x:503.2,y:390.1}},{t:this.shape_104,p:{x:503.3,y:400.7}},{t:this.shape_103,p:{x:504.7,y:414.7}},{t:this.shape_102,p:{x:503.5,y:358.6}},{t:this.shape_101,p:{x:488.1,y:346.8}},{t:this.shape_100,p:{x:516.4,y:347.3}},{t:this.shape_99,p:{x:504.2,y:381.7}},{t:this.shape_98,p:{x:501.5,y:234.3}},{t:this.shape_97,p:{x:498.7,y:229.9}},{t:this.shape_96,p:{x:509.9,y:232.3}},{t:this.shape_95,p:{x:500.6,y:234.5}},{t:this.shape_94,p:{x:512,y:248.8}},{t:this.shape_93,p:{x:503.1,y:219.4}},{t:this.shape_92,p:{x:499.1,y:253}},{t:this.shape_91,p:{x:502.5,y:252.9}},{t:this.shape_90,p:{x:594,y:228.7}},{t:this.shape_89,p:{x:593.2,y:224.1}},{t:this.shape_88,p:{x:592.9,y:226}},{t:this.shape_87,p:{x:413.7,y:228.7}},{t:this.shape_86,p:{x:413.1,y:231.8}},{t:this.shape_85,p:{x:414.8,y:232.3}},{t:this.shape_84,p:{x:405.4,y:223.6}},{t:this.shape_83,p:{x:470.7,y:206.8}},{t:this.shape_82,p:{x:470.7,y:209}},{t:this.shape_81,p:{x:470.6,y:209.9}},{t:this.shape_80,p:{x:470.6,y:209.9}},{t:this.shape_79,p:{x:536.8,y:206.8}},{t:this.shape_78,p:{x:536.8,y:209}},{t:this.shape_77,p:{x:536.8,y:209.9}},{t:this.shape_76,p:{x:536.8,y:209.9}},{t:this.shape_75,p:{x:535.4,y:188.6}},{t:this.shape_74,p:{x:468,y:189.9}},{t:this.shape_73,p:{x:504.9,y:268.5}},{t:this.shape_72,p:{x:504,y:276.4}},{t:this.shape_71,p:{x:502,y:266.8}},{t:this.shape_70,p:{x:514.1,y:269.4}},{t:this.shape_69,p:{x:488.9,y:271.3}},{t:this.shape_68,p:{x:468.6,y:275.2}},{t:this.shape_67,p:{x:503.9,y:289.8}},{t:this.shape_66,p:{x:497.5,y:268.1}},{t:this.shape_65,p:{x:593.6,y:225.7}},{t:this.shape_64,p:{x:592.5,y:226.9}},{t:this.shape_63,p:{x:410.1,y:227.6}},{t:this.shape_62,p:{x:410.1,y:229.8}},{t:this.shape_61,p:{x:496.8,y:175}},{t:this.shape_60,p:{x:583.8,y:150.4}},{t:this.shape_59,p:{x:498.5,y:160}},{t:this.shape_58,p:{x:485.7,y:144.2}},{t:this.shape_57,p:{x:474.6,y:123.9}},{t:this.shape_56,p:{x:539.7,y:137.1}},{t:this.shape_55,p:{x:579.7,y:163.4}},{t:this.shape_54,p:{x:591.3,y:193}},{t:this.shape_53,p:{x:551.1,y:123}},{t:this.shape_52,p:{x:567.9,y:138.7}},{t:this.shape_51,p:{x:591.3,y:174.5}},{t:this.shape_50,p:{x:586.5,y:150.5}},{t:this.shape_49,p:{x:528.8,y:124.4}},{t:this.shape_48,p:{x:504.2,y:178.3}},{t:this.shape_47,p:{x:474,y:144.6}},{t:this.shape_46,p:{x:560,y:149.1}},{t:this.shape_45,p:{x:530.2,y:165.9}},{t:this.shape_44,p:{x:588.5,y:165.8}},{t:this.shape_43,p:{x:448.5,y:133.8}},{t:this.shape_42,p:{x:506.6,y:104.8}},{t:this.shape_41,p:{x:467,y:111.8}},{t:this.shape_40,p:{x:554.7,y:111}},{t:this.shape_39,p:{x:538.3,y:111.5}},{t:this.shape_38,p:{x:456.4,y:109.3}},{t:this.shape_37,p:{x:436.3,y:145.2}},{t:this.shape_36,p:{x:440.7,y:122}},{t:this.shape_35,p:{x:433.9,y:125.8}},{t:this.shape_34,p:{x:586.4,y:157.8}},{t:this.shape_33,p:{x:587.2,y:145.9}},{t:this.shape_32,p:{x:594.8,y:190.7}},{t:this.shape_31,p:{x:585.9,y:202.5}},{t:this.shape_30,p:{x:516.1,y:134.1}},{t:this.shape_29,p:{x:586.7,y:174.5}},{t:this.shape_28,p:{x:539,y:130.3}},{t:this.shape_27,p:{x:431.9,y:368.3}},{t:this.shape_26,p:{x:438.5,y:364.8}},{t:this.shape_25,p:{x:440.4,y:382.9}},{t:this.shape_24,p:{x:447.5,y:379.5}},{t:this.shape_23,p:{x:448.6,y:399.7}},{t:this.shape_22,p:{x:455.7,y:396.2}},{t:this.shape_21,p:{x:456.8,y:416.4}},{t:this.shape_20,p:{x:463.9,y:412.9}},{t:this.shape_19,p:{x:473.8,y:436.9}},{t:this.shape_18,p:{x:478,y:430.3}},{t:this.shape_17,p:{x:489.5,y:446.9}},{t:this.shape_16,p:{x:493.8,y:440.2}},{t:this.shape_15,p:{x:502.9,y:454.4}},{t:this.shape_14,p:{x:465.9,y:426.6}},{t:this.shape_13,p:{x:574.2,y:363.3}},{t:this.shape_12,p:{x:567.1,y:359.1}},{t:this.shape_11,p:{x:565.7,y:377.9}},{t:this.shape_10,p:{x:558.6,y:374.2}},{t:this.shape_9,p:{x:557.4,y:395.6}},{t:this.shape_8,p:{x:550.3,y:391.9}},{t:this.shape_7,p:{x:549.2,y:413.4}},{t:this.shape_6,p:{x:542,y:409.7}},{t:this.shape_5,p:{x:532.1,y:435.2}},{t:this.shape_4,p:{x:527.8,y:428.1}},{t:this.shape_3,p:{x:516.2,y:445.7}},{t:this.shape_2,p:{x:511.9,y:438.6}},{t:this.shape_1,p:{x:502.7,y:453.7}},{t:this.shape,p:{x:540.1,y:424.2}}]},2).to({state:[{t:this.shape_132,p:{x:404.7,y:640.3}},{t:this.shape_124,p:{x:502.3,y:331.1}},{t:this.shape_123,p:{x:501.9,y:315.5}},{t:this.shape_122,p:{x:502.3,y:222.6}},{t:this.shape_131,p:{x:473.3,y:592.3}},{t:this.shape_117,p:{x:589.9,y:607.9}},{t:this.shape_116,p:{x:588.2,y:601.5}},{t:this.shape_115,p:{x:588.9,y:594.4}},{t:this.shape_130,p:{x:465.5,y:434.4}},{t:this.shape_113,p:{x:504.9,y:480.5}},{t:this.shape_112,p:{x:504.9,y:503.4}},{t:this.shape_111,p:{x:505.5,y:526.5}},{t:this.shape_110,p:{x:503.1,y:381.2}},{t:this.shape_109,p:{x:503.7,y:394.7}},{t:this.shape_108,p:{x:503,y:366.3}},{t:this.shape_107,p:{x:503.1,y:376.6}},{t:this.shape_106,p:{x:504.3,y:357.2}},{t:this.shape_105,p:{x:503.2,y:390.1}},{t:this.shape_104,p:{x:503.3,y:400.7}},{t:this.shape_103,p:{x:504.7,y:414.7}},{t:this.shape_102,p:{x:503.5,y:358.6}},{t:this.shape_101,p:{x:488.1,y:346.8}},{t:this.shape_100,p:{x:516.4,y:347.3}},{t:this.shape_99,p:{x:504.2,y:381.7}},{t:this.shape_98,p:{x:501.5,y:234.3}},{t:this.shape_97,p:{x:498.7,y:229.9}},{t:this.shape_96,p:{x:509.9,y:232.3}},{t:this.shape_95,p:{x:500.6,y:234.5}},{t:this.shape_94,p:{x:512,y:248.8}},{t:this.shape_93,p:{x:503.1,y:219.4}},{t:this.shape_92,p:{x:499.1,y:253}},{t:this.shape_91,p:{x:502.5,y:252.9}},{t:this.shape_90,p:{x:594,y:228.7}},{t:this.shape_89,p:{x:593.2,y:224.1}},{t:this.shape_88,p:{x:592.9,y:226}},{t:this.shape_87,p:{x:413.7,y:228.7}},{t:this.shape_86,p:{x:413.1,y:231.8}},{t:this.shape_85,p:{x:414.8,y:232.3}},{t:this.shape_84,p:{x:405.4,y:223.6}},{t:this.shape_83,p:{x:470.7,y:206.8}},{t:this.shape_82,p:{x:470.7,y:209}},{t:this.shape_81,p:{x:470.6,y:209.9}},{t:this.shape_80,p:{x:470.6,y:209.9}},{t:this.shape_79,p:{x:536.8,y:206.8}},{t:this.shape_78,p:{x:536.8,y:209}},{t:this.shape_77,p:{x:536.8,y:209.9}},{t:this.shape_76,p:{x:536.8,y:209.9}},{t:this.shape_75,p:{x:535.4,y:188.6}},{t:this.shape_74,p:{x:468,y:189.9}},{t:this.shape_73,p:{x:504.9,y:268.5}},{t:this.shape_72,p:{x:504,y:276.4}},{t:this.shape_71,p:{x:502,y:266.8}},{t:this.shape_70,p:{x:514.1,y:269.4}},{t:this.shape_69,p:{x:488.9,y:271.3}},{t:this.shape_68,p:{x:468.6,y:275.2}},{t:this.shape_67,p:{x:503.9,y:289.8}},{t:this.shape_66,p:{x:497.5,y:268.1}},{t:this.shape_65,p:{x:593.6,y:225.7}},{t:this.shape_64,p:{x:592.5,y:226.9}},{t:this.shape_63,p:{x:410.1,y:227.6}},{t:this.shape_62,p:{x:410.1,y:229.8}},{t:this.shape_61,p:{x:496.8,y:175}},{t:this.shape_60,p:{x:583.8,y:150.4}},{t:this.shape_59,p:{x:498.5,y:160}},{t:this.shape_58,p:{x:485.7,y:144.2}},{t:this.shape_57,p:{x:474.6,y:123.9}},{t:this.shape_56,p:{x:539.7,y:137.1}},{t:this.shape_55,p:{x:579.7,y:163.4}},{t:this.shape_54,p:{x:591.3,y:193}},{t:this.shape_53,p:{x:551.1,y:123}},{t:this.shape_52,p:{x:567.9,y:138.7}},{t:this.shape_51,p:{x:591.3,y:174.5}},{t:this.shape_50,p:{x:586.5,y:150.5}},{t:this.shape_49,p:{x:528.8,y:124.4}},{t:this.shape_48,p:{x:504.2,y:178.3}},{t:this.shape_47,p:{x:474,y:144.6}},{t:this.shape_46,p:{x:560,y:149.1}},{t:this.shape_45,p:{x:530.2,y:165.9}},{t:this.shape_44,p:{x:588.5,y:165.8}},{t:this.shape_43,p:{x:448.5,y:133.8}},{t:this.shape_42,p:{x:506.6,y:104.8}},{t:this.shape_41,p:{x:467,y:111.8}},{t:this.shape_40,p:{x:554.7,y:111}},{t:this.shape_39,p:{x:538.3,y:111.5}},{t:this.shape_38,p:{x:456.4,y:109.3}},{t:this.shape_37,p:{x:436.3,y:145.2}},{t:this.shape_36,p:{x:440.7,y:122}},{t:this.shape_35,p:{x:433.9,y:125.8}},{t:this.shape_34,p:{x:586.4,y:157.8}},{t:this.shape_33,p:{x:587.2,y:145.9}},{t:this.shape_32,p:{x:594.8,y:190.7}},{t:this.shape_31,p:{x:585.9,y:202.5}},{t:this.shape_30,p:{x:516.1,y:134.1}},{t:this.shape_29,p:{x:586.7,y:174.5}},{t:this.shape_28,p:{x:539,y:130.3}},{t:this.shape_27,p:{x:431.9,y:368.3}},{t:this.shape_26,p:{x:438.5,y:364.8}},{t:this.shape_25,p:{x:440.4,y:382.9}},{t:this.shape_24,p:{x:447.5,y:379.5}},{t:this.shape_23,p:{x:448.6,y:399.7}},{t:this.shape_22,p:{x:455.7,y:396.2}},{t:this.shape_21,p:{x:456.8,y:416.4}},{t:this.shape_20,p:{x:463.9,y:412.9}},{t:this.shape_19,p:{x:473.8,y:436.9}},{t:this.shape_18,p:{x:478,y:430.3}},{t:this.shape_17,p:{x:489.5,y:446.9}},{t:this.shape_16,p:{x:493.8,y:440.2}},{t:this.shape_15,p:{x:502.9,y:454.4}},{t:this.shape_14,p:{x:465.9,y:426.6}},{t:this.shape_13,p:{x:574.2,y:363.3}},{t:this.shape_12,p:{x:567.1,y:359.1}},{t:this.shape_11,p:{x:565.7,y:377.9}},{t:this.shape_10,p:{x:558.6,y:374.2}},{t:this.shape_9,p:{x:557.4,y:395.6}},{t:this.shape_8,p:{x:550.3,y:391.9}},{t:this.shape_7,p:{x:549.2,y:413.4}},{t:this.shape_6,p:{x:542,y:409.7}},{t:this.shape_5,p:{x:532.1,y:435.2}},{t:this.shape_4,p:{x:527.8,y:428.1}},{t:this.shape_3,p:{x:516.2,y:445.7}},{t:this.shape_2,p:{x:511.9,y:438.6}},{t:this.shape_1,p:{x:502.7,y:453.7}},{t:this.shape,p:{x:540.1,y:424.2}}]},4).to({state:[{t:this.shape_124,p:{x:493,y:329.4}},{t:this.shape_123,p:{x:492.7,y:313.8}},{t:this.shape_122,p:{x:493,y:220.9}},{t:this.shape_121,p:{x:497.6,y:591.2}},{t:this.shape_120,p:{x:413.3,y:609.9}},{t:this.shape_119,p:{x:415.4,y:603.3}},{t:this.shape_118,p:{x:414.5,y:596}},{t:this.shape_117,p:{x:580.7,y:606.2}},{t:this.shape_116,p:{x:578.9,y:599.8}},{t:this.shape_115,p:{x:579.7,y:592.7}},{t:this.shape_114,p:{x:493.8,y:454.8}},{t:this.shape_113,p:{x:495.6,y:478.8}},{t:this.shape_112,p:{x:495.6,y:501.7}},{t:this.shape_111,p:{x:496.3,y:524.8}},{t:this.shape_110,p:{x:493.9,y:379.5}},{t:this.shape_109,p:{x:494.5,y:393}},{t:this.shape_108,p:{x:493.7,y:364.6}},{t:this.shape_107,p:{x:493.8,y:374.9}},{t:this.shape_106,p:{x:495.1,y:355.5}},{t:this.shape_105,p:{x:494,y:388.4}},{t:this.shape_104,p:{x:494.1,y:399}},{t:this.shape_103,p:{x:495.5,y:413}},{t:this.shape_102,p:{x:494.2,y:356.9}},{t:this.shape_101,p:{x:478.8,y:345.1}},{t:this.shape_100,p:{x:507.1,y:345.6}},{t:this.shape_99,p:{x:495,y:380}},{t:this.shape_98,p:{x:492.3,y:232.6}},{t:this.shape_97,p:{x:489.4,y:228.2}},{t:this.shape_96,p:{x:500.7,y:230.6}},{t:this.shape_95,p:{x:491.4,y:232.8}},{t:this.shape_94,p:{x:502.8,y:247.1}},{t:this.shape_93,p:{x:493.8,y:217.7}},{t:this.shape_92,p:{x:489.8,y:251.3}},{t:this.shape_91,p:{x:493.3,y:251.2}},{t:this.shape_90,p:{x:584.8,y:227}},{t:this.shape_89,p:{x:584,y:222.4}},{t:this.shape_88,p:{x:583.6,y:224.3}},{t:this.shape_87,p:{x:404.5,y:227}},{t:this.shape_86,p:{x:403.9,y:230.1}},{t:this.shape_85,p:{x:405.5,y:230.6}},{t:this.shape_84,p:{x:396.2,y:221.9}},{t:this.shape_83,p:{x:461.4,y:205.1}},{t:this.shape_82,p:{x:461.4,y:207.3}},{t:this.shape_81,p:{x:461.4,y:208.2}},{t:this.shape_80,p:{x:461.4,y:208.2}},{t:this.shape_79,p:{x:527.5,y:205.1}},{t:this.shape_78,p:{x:527.5,y:207.3}},{t:this.shape_77,p:{x:527.5,y:208.2}},{t:this.shape_76,p:{x:527.5,y:208.2}},{t:this.shape_75,p:{x:526.2,y:186.9}},{t:this.shape_74,p:{x:458.8,y:188.2}},{t:this.shape_73,p:{x:495.7,y:266.8}},{t:this.shape_72,p:{x:494.8,y:274.7}},{t:this.shape_71,p:{x:492.7,y:265.1}},{t:this.shape_70,p:{x:504.8,y:267.7}},{t:this.shape_69,p:{x:479.6,y:269.6}},{t:this.shape_68,p:{x:459.3,y:273.5}},{t:this.shape_67,p:{x:494.6,y:288.1}},{t:this.shape_66,p:{x:488.3,y:266.4}},{t:this.shape_65,p:{x:584.3,y:224}},{t:this.shape_64,p:{x:583.2,y:225.2}},{t:this.shape_63,p:{x:400.9,y:225.9}},{t:this.shape_62,p:{x:400.8,y:228.1}},{t:this.shape_61,p:{x:487.6,y:173.3}},{t:this.shape_60,p:{x:574.6,y:148.7}},{t:this.shape_59,p:{x:489.2,y:158.3}},{t:this.shape_58,p:{x:476.5,y:142.5}},{t:this.shape_57,p:{x:465.4,y:122.2}},{t:this.shape_56,p:{x:530.4,y:135.4}},{t:this.shape_55,p:{x:570.4,y:161.7}},{t:this.shape_54,p:{x:582,y:191.3}},{t:this.shape_53,p:{x:541.9,y:121.3}},{t:this.shape_52,p:{x:558.7,y:137}},{t:this.shape_51,p:{x:582,y:172.8}},{t:this.shape_50,p:{x:577.3,y:148.8}},{t:this.shape_49,p:{x:519.5,y:122.7}},{t:this.shape_48,p:{x:495,y:176.6}},{t:this.shape_47,p:{x:464.8,y:142.9}},{t:this.shape_46,p:{x:550.8,y:147.4}},{t:this.shape_45,p:{x:520.9,y:164.2}},{t:this.shape_44,p:{x:579.3,y:164.1}},{t:this.shape_43,p:{x:439.2,y:132.1}},{t:this.shape_42,p:{x:497.3,y:103.1}},{t:this.shape_41,p:{x:457.7,y:110.1}},{t:this.shape_40,p:{x:545.4,y:109.3}},{t:this.shape_39,p:{x:529,y:109.8}},{t:this.shape_38,p:{x:447.1,y:107.6}},{t:this.shape_37,p:{x:427.1,y:143.5}},{t:this.shape_36,p:{x:431.5,y:120.3}},{t:this.shape_35,p:{x:424.6,y:124.1}},{t:this.shape_34,p:{x:577.1,y:156.1}},{t:this.shape_33,p:{x:577.9,y:144.2}},{t:this.shape_32,p:{x:585.5,y:189}},{t:this.shape_31,p:{x:576.7,y:200.8}},{t:this.shape_30,p:{x:506.8,y:132.4}},{t:this.shape_29,p:{x:577.4,y:172.8}},{t:this.shape_28,p:{x:529.8,y:128.6}},{t:this.shape_27,p:{x:422.7,y:366.6}},{t:this.shape_26,p:{x:429.2,y:363.1}},{t:this.shape_25,p:{x:431.1,y:381.2}},{t:this.shape_24,p:{x:438.2,y:377.8}},{t:this.shape_23,p:{x:439.4,y:398}},{t:this.shape_22,p:{x:446.4,y:394.5}},{t:this.shape_21,p:{x:447.5,y:414.7}},{t:this.shape_20,p:{x:454.6,y:411.2}},{t:this.shape_19,p:{x:464.5,y:435.2}},{t:this.shape_18,p:{x:468.7,y:428.6}},{t:this.shape_17,p:{x:480.3,y:445.2}},{t:this.shape_16,p:{x:484.5,y:438.5}},{t:this.shape_15,p:{x:493.6,y:452.7}},{t:this.shape_14,p:{x:456.6,y:424.9}},{t:this.shape_13,p:{x:564.9,y:361.6}},{t:this.shape_12,p:{x:557.9,y:357.4}},{t:this.shape_11,p:{x:556.5,y:376.2}},{t:this.shape_10,p:{x:549.3,y:372.5}},{t:this.shape_9,p:{x:548.2,y:393.9}},{t:this.shape_8,p:{x:541,y:390.2}},{t:this.shape_7,p:{x:539.9,y:411.7}},{t:this.shape_6,p:{x:532.8,y:408}},{t:this.shape_5,p:{x:522.8,y:433.5}},{t:this.shape_4,p:{x:518.6,y:426.4}},{t:this.shape_3,p:{x:506.9,y:444}},{t:this.shape_2,p:{x:502.7,y:436.9}},{t:this.shape_1,p:{x:493.5,y:452}},{t:this.shape,p:{x:530.8,y:422.5}}]},1).to({state:[{t:this.shape_124,p:{x:493,y:329.4}},{t:this.shape_123,p:{x:492.7,y:313.8}},{t:this.shape_122,p:{x:493,y:220.9}},{t:this.shape_121,p:{x:497.6,y:591.2}},{t:this.shape_120,p:{x:413.3,y:609.9}},{t:this.shape_119,p:{x:415.4,y:603.3}},{t:this.shape_118,p:{x:414.5,y:596}},{t:this.shape_117,p:{x:580.7,y:606.2}},{t:this.shape_116,p:{x:578.9,y:599.8}},{t:this.shape_115,p:{x:579.7,y:592.7}},{t:this.shape_114,p:{x:493.8,y:454.8}},{t:this.shape_113,p:{x:495.6,y:478.8}},{t:this.shape_112,p:{x:495.6,y:501.7}},{t:this.shape_111,p:{x:496.3,y:524.8}},{t:this.shape_110,p:{x:493.9,y:379.5}},{t:this.shape_109,p:{x:494.5,y:393}},{t:this.shape_108,p:{x:493.7,y:364.6}},{t:this.shape_107,p:{x:493.8,y:374.9}},{t:this.shape_106,p:{x:495.1,y:355.5}},{t:this.shape_105,p:{x:494,y:388.4}},{t:this.shape_104,p:{x:494.1,y:399}},{t:this.shape_103,p:{x:495.5,y:413}},{t:this.shape_102,p:{x:494.2,y:356.9}},{t:this.shape_101,p:{x:478.8,y:345.1}},{t:this.shape_100,p:{x:507.1,y:345.6}},{t:this.shape_99,p:{x:495,y:380}},{t:this.shape_98,p:{x:492.3,y:232.6}},{t:this.shape_97,p:{x:489.4,y:228.2}},{t:this.shape_96,p:{x:500.7,y:230.6}},{t:this.shape_95,p:{x:491.4,y:232.8}},{t:this.shape_94,p:{x:502.8,y:247.1}},{t:this.shape_93,p:{x:493.8,y:217.7}},{t:this.shape_92,p:{x:489.8,y:251.3}},{t:this.shape_91,p:{x:493.3,y:251.2}},{t:this.shape_90,p:{x:584.8,y:227}},{t:this.shape_89,p:{x:584,y:222.4}},{t:this.shape_88,p:{x:583.6,y:224.3}},{t:this.shape_87,p:{x:404.5,y:227}},{t:this.shape_86,p:{x:403.9,y:230.1}},{t:this.shape_85,p:{x:405.5,y:230.6}},{t:this.shape_84,p:{x:396.2,y:221.9}},{t:this.shape_83,p:{x:461.4,y:205.1}},{t:this.shape_82,p:{x:461.4,y:207.3}},{t:this.shape_81,p:{x:461.4,y:208.2}},{t:this.shape_80,p:{x:461.4,y:208.2}},{t:this.shape_79,p:{x:527.5,y:205.1}},{t:this.shape_78,p:{x:527.5,y:207.3}},{t:this.shape_77,p:{x:527.5,y:208.2}},{t:this.shape_76,p:{x:527.5,y:208.2}},{t:this.shape_75,p:{x:526.2,y:186.9}},{t:this.shape_74,p:{x:458.8,y:188.2}},{t:this.shape_73,p:{x:495.7,y:266.8}},{t:this.shape_72,p:{x:494.8,y:274.7}},{t:this.shape_71,p:{x:492.7,y:265.1}},{t:this.shape_70,p:{x:504.8,y:267.7}},{t:this.shape_69,p:{x:479.6,y:269.6}},{t:this.shape_68,p:{x:459.3,y:273.5}},{t:this.shape_67,p:{x:494.6,y:288.1}},{t:this.shape_66,p:{x:488.3,y:266.4}},{t:this.shape_65,p:{x:584.3,y:224}},{t:this.shape_64,p:{x:583.2,y:225.2}},{t:this.shape_63,p:{x:400.9,y:225.9}},{t:this.shape_62,p:{x:400.8,y:228.1}},{t:this.shape_61,p:{x:487.6,y:173.3}},{t:this.shape_60,p:{x:574.6,y:148.7}},{t:this.shape_59,p:{x:489.2,y:158.3}},{t:this.shape_58,p:{x:476.5,y:142.5}},{t:this.shape_57,p:{x:465.4,y:122.2}},{t:this.shape_56,p:{x:530.4,y:135.4}},{t:this.shape_55,p:{x:570.4,y:161.7}},{t:this.shape_54,p:{x:582,y:191.3}},{t:this.shape_53,p:{x:541.9,y:121.3}},{t:this.shape_52,p:{x:558.7,y:137}},{t:this.shape_51,p:{x:582,y:172.8}},{t:this.shape_50,p:{x:577.3,y:148.8}},{t:this.shape_49,p:{x:519.5,y:122.7}},{t:this.shape_48,p:{x:495,y:176.6}},{t:this.shape_47,p:{x:464.8,y:142.9}},{t:this.shape_46,p:{x:550.8,y:147.4}},{t:this.shape_45,p:{x:520.9,y:164.2}},{t:this.shape_44,p:{x:579.3,y:164.1}},{t:this.shape_43,p:{x:439.2,y:132.1}},{t:this.shape_42,p:{x:497.3,y:103.1}},{t:this.shape_41,p:{x:457.7,y:110.1}},{t:this.shape_40,p:{x:545.4,y:109.3}},{t:this.shape_39,p:{x:529,y:109.8}},{t:this.shape_38,p:{x:447.1,y:107.6}},{t:this.shape_37,p:{x:427.1,y:143.5}},{t:this.shape_36,p:{x:431.5,y:120.3}},{t:this.shape_35,p:{x:424.6,y:124.1}},{t:this.shape_34,p:{x:577.1,y:156.1}},{t:this.shape_33,p:{x:577.9,y:144.2}},{t:this.shape_32,p:{x:585.5,y:189}},{t:this.shape_31,p:{x:576.7,y:200.8}},{t:this.shape_30,p:{x:506.8,y:132.4}},{t:this.shape_29,p:{x:577.4,y:172.8}},{t:this.shape_28,p:{x:529.8,y:128.6}},{t:this.shape_27,p:{x:422.7,y:366.6}},{t:this.shape_26,p:{x:429.2,y:363.1}},{t:this.shape_25,p:{x:431.1,y:381.2}},{t:this.shape_24,p:{x:438.2,y:377.8}},{t:this.shape_23,p:{x:439.4,y:398}},{t:this.shape_22,p:{x:446.4,y:394.5}},{t:this.shape_21,p:{x:447.5,y:414.7}},{t:this.shape_20,p:{x:454.6,y:411.2}},{t:this.shape_19,p:{x:464.5,y:435.2}},{t:this.shape_18,p:{x:468.7,y:428.6}},{t:this.shape_17,p:{x:480.3,y:445.2}},{t:this.shape_16,p:{x:484.5,y:438.5}},{t:this.shape_15,p:{x:493.6,y:452.7}},{t:this.shape_14,p:{x:456.6,y:424.9}},{t:this.shape_13,p:{x:564.9,y:361.6}},{t:this.shape_12,p:{x:557.9,y:357.4}},{t:this.shape_11,p:{x:556.5,y:376.2}},{t:this.shape_10,p:{x:549.3,y:372.5}},{t:this.shape_9,p:{x:548.2,y:393.9}},{t:this.shape_8,p:{x:541,y:390.2}},{t:this.shape_7,p:{x:539.9,y:411.7}},{t:this.shape_6,p:{x:532.8,y:408}},{t:this.shape_5,p:{x:522.8,y:433.5}},{t:this.shape_4,p:{x:518.6,y:426.4}},{t:this.shape_3,p:{x:506.9,y:444}},{t:this.shape_2,p:{x:502.7,y:436.9}},{t:this.shape_1,p:{x:493.5,y:452}},{t:this.shape,p:{x:530.8,y:422.5}}]},3).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},6).to({state:[]},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(307).to({_off:false},0).to({x:277.2,y:403.8},2).to({_off:true,x:327.7,y:422.5},1).wait(15).to({_off:false,x:321.1,y:407.1,mode:"synched",startPosition:0,visible:true},0).to({x:489.2,y:405.1},3).to({_off:true},1).wait(14).to({_off:false,x:489.5,y:408.1},0).to({x:801.5,y:418.1},6).to({_off:true},1).wait(56));

	// 1danse-hånd
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F69E8F").s().p("AgJCgQgdgBgUgUQgVgVAAgcIAAiyQAAgeAVgUQAUgVAdAAIATAAQAdAAAUAVQAVAUAAAeIAACyQAAAcgVAVQgUAUgdABg");
	this.shape_133.setTransform(106,263.4,0.479,0.479,-14.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F69E8F").s().p("AgEC3QgkAAgZgZQgZgZAAgkIAAjCQAAgjAZgZQAZgZAkAAIAJAAQAkAAAZAZQAZAZAAAjIAADCQAAAkgZAZQgZAZgkAAg");
	this.shape_134.setTransform(113.9,259.3,0.479,0.479,-14.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F69E8F").s().p("AgFDSQgnAAgbgcQgcgcAAgnIAAjlQAAgnAcgcQAbgbAngBIALAAQAnABAcAbQAbAcAAAnIAADlQAAAngbAcQgcAcgnAAg");
	this.shape_135.setTransform(122.6,256.6,0.479,0.479,-14.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F69E8F").s().p("AgFC3QgqAAgdgdQgegdAAgqIAAilQAAgpAegeQAdgdAqAAIALAAQAqAAAdAdQAeAeAAApIAAClQAAApgeAeQgdAdgqAAg");
	this.shape_136.setTransform(133,256.4,0.479,0.479,-14.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F69E8F").s().p("AiRHCQh4hzCHi2QBEhbBahDQALiGAXh+QAsj+A4AhQA3AggUEoQgKCUgVCNQgeB9g2BnQhFCEhJAAQgqAAgrgpg");
	this.shape_137.setTransform(140.9,265,0.479,0.479,-14.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#DA725C").s().p("AjrG9QiNhmgXlhQgHhuAGh7IAHhkIAQgRQAUgTATgJQA7geAVBLQgBBPAIBNQAFAmAEAXIAEkvIAUgYQAZgaAagNQBSgrA0BqQADB7gDBbIAHhRQAQinAbgqQAJACAtgZQA2gRA3AoQAIBFADBKQAHgyAOggQBAgZBGAgQAkAQAWAVIAANNQg0AyhrAZQg9AOhBAAQiiAAjAhZg");
	this.shape_138.setTransform(122.8,269.9,0.479,0.479,-14.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B56556").s().p("AkrFKIAAqTIJXAAIAAKTg");
	this.shape_139.setTransform(134.2,301.5,0.479,0.479,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},316).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},4).to({state:[]},1).wait(85));

	// danse-hånd
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F69E8F").s().p("AgJCfQgdAAgVgUQgVgVAAgdIAAixQAAgeAVgUQAVgVAdAAIATAAQAdAAAVAVQAVAUAAAeIAACxQAAAdgVAVQgVAUgdAAg");
	this.shape_140.setTransform(314.2,259.7,0.409,0.409,11);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F69E8F").s().p("AgFC3QgjAAgagZQgZgZAAgkIAAjBQAAgjAZgaQAagZAjAAIALAAQAkAAAZAZQAZAaAAAjIAADBQAAAkgZAZQgZAZgkAAg");
	this.shape_141.setTransform(307.2,256.6,0.409,0.409,11);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F69E8F").s().p("AgFDRQgoAAgbgcQgcgbAAgnIAAjlQAAgnAcgbQAbgcAoAAIAMAAQAnAAAcAcQAbAbAAAnIAADlQAAAngbAbQgcAcgnAAg");
	this.shape_142.setTransform(299.5,254.8,0.409,0.409,11);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F69E8F").s().p("AgGC3QgpAAgegdQgegeAAgqIAAikQAAgpAegeQAegdApAAIANAAQApAAAeAdQAeAeAAApIAACkQAAAqgeAeQgeAdgpAAg");
	this.shape_143.setTransform(290.6,255.2,0.409,0.409,11);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F69E8F").s().p("AhSFnQgihAgdhZIgWhLQgViNgKiUQgVknA4ghQA5ghAtD+QAWB/ALCFIA2AtQA/A4ArA5QCJC2h6BzQgrApgqAAQhKAAhGiEg");
	this.shape_144.setTransform(284.3,262.9,0.409,0.409,11);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#DA725C").s().p("Aj2IIQhEgQg1gfIgogcIAAtNIAQgNQAUgOAWgKQBIggBAAZQAOAgAIA0QADhLAHhGQA5goA2ARQANAEAVALQAPAJAFgBQAcAqAQCnIAGBRQgChbADh7QA1hqBSArQAqAVAeAqIAEEvQAEgXAFgmQAIhOgBhOQAVhLA8AeQAeAPAaAeIAHBkQAGB7gIBuQgWFhiPBmQjCBZikAAQhCAAg9gOg");
	this.shape_145.setTransform(300.1,266.1,0.409,0.409,11);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#B56556").s().p("AkuFKIAAqTIJdAAIAAKTg");
	this.shape_146.setTransform(292.2,293.7,0.409,0.409,11);

	this.instance_8 = new lib.Tween33("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(297.7,275.7);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween34("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(401.7,273.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F69E8F").s().p("AgJCgQgdgBgUgUQgVgVAAgcIAAiyQAAgeAVgUQAUgVAdAAIATAAQAdAAAUAVQAVAUAAAeIAACyQAAAcgVAVQgUAUgdABg");
	this.shape_147.setTransform(319.9,266.8,0.479,0.479,-14.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F69E8F").s().p("AgEC3QgkAAgZgZQgZgZAAgkIAAjCQAAgjAZgZQAZgZAkAAIAJAAQAkAAAZAZQAZAZAAAjIAADCQAAAkgZAZQgZAZgkAAg");
	this.shape_148.setTransform(327.8,262.7,0.479,0.479,-14.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F69E8F").s().p("AgFDSQgnAAgbgcQgcgcAAgnIAAjlQAAgnAcgcQAbgbAngBIALAAQAnABAcAbQAbAcAAAnIAADlQAAAngbAcQgcAcgnAAg");
	this.shape_149.setTransform(336.6,260,0.479,0.479,-14.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F69E8F").s().p("AgFC3QgqAAgdgdQgegdAAgqIAAilQAAgpAegeQAdgdAqAAIALAAQAqAAAdAdQAeAeAAApIAAClQAAApgeAeQgdAdgqAAg");
	this.shape_150.setTransform(347,259.8,0.479,0.479,-14.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F69E8F").s().p("AiRHCQh4hzCHi2QBEhbBahDQALiGAXh+QAsj+A4AhQA3AggUEoQgKCUgVCNQgeB9g2BnQhFCEhJAAQgqAAgrgpg");
	this.shape_151.setTransform(354.8,268.4,0.479,0.479,-14.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#DA725C").s().p("AjrG9QiNhmgXlhQgHhuAGh7IAHhkIAQgRQAUgTATgJQA7geAVBLQgBBPAIBNQAFAmAEAXIAEkvIAUgYQAZgaAagNQBSgrA0BqQADB7gDBbIAHhRQAQinAbgqQAJACAtgZQA2gRA3AoQAIBFADBKQAHgyAOggQBAgZBGAgQAkAQAWAVIAANNQg0AyhrAZQg9AOhBAAQiiAAjAhZg");
	this.shape_152.setTransform(336.8,273.3,0.479,0.479,-14.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#B56556").s().p("AkrFKIAAqTIJXAAIAAKTg");
	this.shape_153.setTransform(348.1,304.9,0.479,0.479,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140}]},300).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_9}]},2).to({state:[]},1).to({state:[{t:this.instance_8}]},15).to({state:[{t:this.instance_8}]},3).to({state:[]},1).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147}]},5).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147}]},4).to({state:[]},1).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},6).to({state:[]},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(307).to({_off:false},0).to({_off:true,x:401.7,y:273.2},2).wait(16).to({_off:false,regY:-10,x:446.2,y:267.6},0).to({regX:10,x:623.4,y:267.1},3).to({_off:true},1).wait(14).to({_off:false,regX:0,x:614.9},0).to({regX:10,x:935.6,y:274.5},6).to({_off:true},1).wait(56));

	// vinke
	this.instance_10 = new lib.Tween11("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(229.1,312.2);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(244.9,315.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween13("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(232.6,311.4);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(244.9,315.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween15("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(232.6,311.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},166).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[]},14).to({state:[]},65).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(166).to({_off:false},0).to({_off:true,x:244.9,y:315.5},4).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(166).to({_off:false},4).to({_off:true,x:232.6,y:311.4},4).wait(232));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(170).to({_off:false},4).to({_off:true,x:244.9,y:315.5},4).wait(228));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(174).to({_off:false},4).to({_off:true,x:232.6,y:311.4},4).wait(224));

	// kigge-hånd
	this.instance_15 = new lib.Symbol2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(135,662.8,1,1,0,0,0,116.4,15.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({_off:false},0).wait(1).to({x:135.3,y:657.6},0).wait(1).to({x:135.5,y:652.4},0).wait(1).to({x:135.8,y:647.1},0).wait(1).to({x:136,y:641.9},0).wait(1).to({x:136.3,y:636.7},0).wait(1).to({x:136.5,y:631.5},0).wait(74).to({_off:true},1).wait(271));

	// øjne
	this.instance_16 = new lib.Symbol5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(141.8,614.9,1,1,0,0,0,41.6,8.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(75).to({_off:false},0).wait(1).to({x:143.4,y:614.8},0).wait(1).to({x:145.1,y:614.7},0).wait(1).to({x:146.7},0).wait(1).to({x:148.4,y:614.6},0).wait(1).to({x:150},0).wait(6).to({x:141.8,y:614.9},0).wait(13).to({_off:true},1).wait(306));

	// øjne-ansigt
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#363030").s().p("AGxEAQgNhOgcg2QgnhMg8gKQg0gIg3gcQgogTg5goQhDgvgrgXQg+ggg+gMQgrgIhfgKQgvgEgkgGQguAHgtgCQgYgBAAgZQAAgZAYABIAUABIAEgNQACgKAJgFQAKgFAJADIBEAVQAJACAFAHIBJAIQBnAKA4AQQA4APA/AmIBtBJQBKAyAzAPIA1AKQAhAGARANQAtAlAgBFQAaA6AMBEQAEAYgYAHIgKABQgQAAgDgTg");
	this.shape_154.setTransform(177.1,535.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#363030").s().p("AAAD1QgYgHAFgXQAQhTgPiHQgTipABgxQABgZAZAAQAYAAgBAZQgBAyASCuQAPCLgRBWQgEATgPAAIgJgCg");
	this.shape_155.setTransform(224.8,579.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#363030").s().p("AlABnQgSgSAPgSQBOhfCAgPQAOgCAGAKIAGgDIAOgHQgCgFABgHQADgWAWABQAoABA0gJIASgDQAGgEAJAAIAJgBIAxgJQBvgTBJAbQAWAIgGAYQgHAYgXgIQgRgHgUgDQgGAKgQABIg/ABIAIADQAUAHgCAVQgCAUgWAAQhjAAhegXIgMAFIhtA1QhBAfgzgHIgCAAQgTAQgRAVQgIAKgIAAQgIAAgIgJgABkheICNgCQgegDgeAAQgpAAgoAFg");
	this.shape_156.setTransform(154.2,539);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#363030").s().p("AgbCiQgQgGACgRQADgdABgdIgBgIIgRjTQgCgZAZABQAZAAACAYIAHBlQAJAGABAOIAAAHIAAAAQAIgKARAFQAYAGgGAXQgDANAAAfQAAAdgFAOQgFAOgPARIgbAZQgGAGgKAAQgFAAgGgBg");
	this.shape_157.setTransform(224,607.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#363030").s().p("AgaBgIgUhgQgCgQABgJQABgNAKgJIAGgEQgLgJAEgQIgCgHQgIgXAYgGQAXgGAIAWIACAEQARAvASApQAKAVgTALQgOAIgMgIIABADIAKAzQAFAYgYAHIgJABQgPAAgEgSg");
	this.shape_158.setTransform(232.9,595.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#363030").s().p("AAUB+IgLgLQgLgLADgMQgPgigKgiIgIg5QgGgogNgLQgTgOAMgWQANgWATAPQATAOAIAUQAHAQAEAcQAKBOAlBDQALATgRANQgIAGgIAAQgIAAgJgIg");
	this.shape_159.setTransform(225.3,550.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#363030").s().p("AA3FmQgYgHAEgYQAaikhDiaQgFgMAGgMQAFgNAPAAQASABARADIgIgRQgRgjgTgZIgmgnQgXgWgHgWQgEgNALgMQALgLANAFIALAEIhbhnQgQgSASgRQASgSAPASICiC5QALANgJASQgJASgSgIIgOgGQALAPAKAQQAUAhAeBLQAGAQgPAKQgOAJgOgHQgNgGgNgEQA2CXgaCiQgCASgQAAIgKgBg");
	this.shape_160.setTransform(224.5,562.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#363030").s().p("Ag6BPQgJgDgGgJQgGgKAEgJQAQgnAOgPQAGgIAQgJQARgKAGgGIANgXQAJgMANgEQAMgCALAEQANAFAEALQAKAWgWANQgKAGgHgCIgCAFQgDAFgHAHQgFAFgRAKQgOAJgKANQgHAKgIASQgEAKgIAFQgFAEgHAAIgHgBg");
	this.shape_161.setTransform(72,530.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#363030").s().p("AgFAcIgXgUQgIgGAAgKQABgMAHgGQAHgIAKAAQAJAAAIAIIAXATQAIAGgBALQAAAKgHAIQgHAHgKAAQgJAAgIgHg");
	this.shape_162.setTransform(78.8,526.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#363030").s().p("AjXFpQgTigAYiYQAMhOAOgqQAHgTAIgRIgMAEQgSAHgJgSQgJgQAMgOQA4hCBFgxIgMAFQgWALgLgUQgLgUATgOQBFgzBRgVQBSgWBVAKQAYADAAAZQAAAZgYgDQhPgJhLATIgOAEIAGADQAMAGAAAQQAAAPgMAGQhKAkg9A1QALABAHAMQAKASgOAMQgqAkgUBIQgLAmgLBWQgPCAARCMQADAYgZAAQgZAAgDgYg");
	this.shape_163.setTransform(74.4,550.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#363030").s().p("AgXAAQAAgYAXAAQAYAAAAAYQAAAZgYAAQgXAAAAgZg");
	this.shape_164.setTransform(94.5,514.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#363030").s().p("AF8CfQghgjgsghIAEADIgKgHIAGAEIhqg1Ig4geQgOgDgMgBQgJAHgLAFQgeAOgkgJQgQgEgCgRQgBgJAFgHIAcgDIgBgHQASAEAQgIIAAgBIgVgIQgQAFgQAKQgFAEgDAEQgqAHgpAPQgUAHgJgVIgCgEIgzAMQgSAEgKgQQgJgNAHgKIgIAEQgEACgFABQgPAMgQgQIgFgGQhOAehWAJQgMABgIgKQgIgKAEgMQAHgXANgSQABgEAFgDQAGgIAIgGQAbgWApgFQAHgBAFACQBWgeBagSQARgEALAQQADAGABAEQBcACBYAXQAPAEACARQACANgHAHQgGgIAAAIIAEACIACgCIAAABIAGAFIAJADIAGABQAPACAGAKIAPAHQBRAlA5AkIAkAZIACABIABABIAAAAIAKAHQAoAfAgAjQARARgSASQgIAJgJAAQgJAAgIgJgAg8hJIAJgCIgFgBg");
	this.shape_165.setTransform(176.4,516.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#363030").s().p("AC9BgQhShNhlgmQgwgTgzgIIBsA4IAgAQQAVAMgNAVQgMAVgWgLIgugYQgfgQgYgKIgBABQgrAgg1gQQgXgHAGgYQADgKAGgEIgMgFQgWgJAGgWIACgHIgIgEQgRgJAGgSQAGgTASgBQB3gGBwAsQBuAqBZBUQASARgSARQgJAJgJAAQgJAAgIgIg");
	this.shape_166.setTransform(192.8,516);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#363030").s().p("AkzBZQgMgVATgNQBXg9BogRQAygPA1gIIgJgRQgIgRANgOQAMgNARAJQBDAmBHAGQACgOAQgGQAfgNAegKQAXgIAHAYQACAIgBAGIAVACQAUABAEAVQAEAVgWAGQhNAThNgJQgsgFgpgQQAAAHgEAGQgGAKgPACIgvAHQgFAOgSAAQghABgfAGQhYAahSAuQgIAEgGAAQgMAAgHgNg");
	this.shape_167.setTransform(105.1,516.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#363030").s().p("AhwBAQgNgQAOgQQAOgRASgPIgjAKQgYAGgGgXQgHgYAXgHQBkgbBjgIQAWgCACAWQAAAHgBAGIAVgEQAYgFAHAZQAGAYgYADQhwAWhgAuQgIAEgGAAQgLAAgHgLg");
	this.shape_168.setTransform(144.7,509.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#363030").s().p("AlrFAQgSjqCki7QCDiVCugoIgGAAQgSgDAAgVQABgVARgEQAugKBQAQQBWARAngFQAYgDAHAYQAGAYgYADQgoAGhWgRIgSgEQAEAIgDAJQgEASgTABQjVAMiVCuQiTCsAQDWQACAYgZAAQgZAAgCgYg");
	this.shape_169.setTransform(86.6,538.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#363030").s().p("AgWAvQgJgFgCgKQgCgKAEgJQAKgVAHgXQAHgXAXAGQAYAHgHAXQgIAcgOAcQgEAJgKACIgHABQgGAAgGgDg");
	this.shape_170.setTransform(226.6,570.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#363030").s().p("AH7EqQAAiJgLhJIgIgmIgMgQQg+hMgtgrQhMhJhOgXIgkgKQgWgGgOgHIglgVQgMgGgKgBQgMAGgRAAQgSAAgGgTIgBgDIgdAEIgCADQgNAMgRgIIgXAHQgOAFgJgKIgBABQgNAKgOgMQgFgEgCgFIgMAJQgKAHgJAKIAAABIgFAEQgSAMgMgRIgMAHQgQAKgOgOIgEgEQgJARgUgFIgGgCQgKAKgPgGIgFgDQgEACgGAAQgSAGgVACIgMAPQgKAOgQgIIgGgEIgHANQgLASgUgIIgFgDIgJAJQgMALgPgGQgHgDgEgFIgcAfQgLALgRgGQgKgEgEgHIgEABQgKADgJgFIgUgLQgVgMANgWQAMgVATAKQAOgUAUgQQAMgJAQAFQALADADAJIAKgLQAKgLAOAEQALAEAFAJIARgUQAJgNANABIAFgIQAKgQASAFQAJACAEAGIAbgiQAKgOAQAIQAIAFAEAGQANgEAOgDQAJgCAKAEIAJgKQAGgGAJgBQAJgCAHAFIADACQAMgLASAAQAOgBAGANIATgFQAOgDAKAJIADADIAMgEQANgEALAKIABACQAXgLAbgGQAJgCAJAFQAJAFACAKIABADQAkgEAlAEQAPACAGALQADAEAAAFIAUAHQAeALA6AaQBfAcBSBNIAaAZIgDgFQgMgVAVgMQAUgLAOATQAmA1AWBFIARAtIAFAIQBQBvgoBiQgJAUgTgCIgBgBIAAAcQAAAZgZAAQgZAAAAgZgAg6kcIAAACIAZgGIgEgBQgKAAgLAFgAj8kdIABABIACgCIgGgBIADACgAiwkvIACAHQAKgHAMgEQgFgCgEAAQgIAAgHAGg");
	this.shape_171.setTransform(168.3,570.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#363030").s().p("ADGCHQgdgqg3giQgegRhJghIjzhsQgWgKANgWQAMgWAWAKIESB7QA7AaAlAbQAwAiAfArQAOAUgWAMQgJAFgHAAQgLAAgJgMg");
	this.shape_172.setTransform(198.1,554.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#363030").s().p("AiKAIQgSgQASgRQASgSARAQQAdAaAaAFQAcAGAigOQAZgLBHgpQAVgMAMAVQANAWgVAMQgwAegcAPQgwAbghACIgGAAQgzAAg7g1g");
	this.shape_173.setTransform(112.1,549.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#363030").s().p("AMlF8QgXAAgCgYIAAgQQAEiCgUhgQgah+hGheQhAhXhcg5Qheg6hpgQQhtgQiHAeQgOADjdBAQg0APgnACQgzAEgngRQgQgHgXgTQgagWgNgKQgvgjgmAVQhcAzhUBQQhPBMg+BcQgOATgVgLQgWgNAOgUQBPh1BhhUQAtgnAzgjIA0gkQAggUAagFQAngGAoAfIBCA3QAzAfBUgUQAvgLBXghQEdhdDNBFQBmAiBVBGQBVBGA4BdQA3BbAUB5IAFAkQAFhGgEhGQgGi4g9i+QgIgXAYgGQAZgHAHAXQA9C6AIC/QAEBjgJBfIgEArQgDAZgFASQgCAHgPAYQgJAOgCAKIAAAGQgBAYgXAAIgBAAg");
	this.shape_174.setTransform(142.3,583.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#363030").s().p("ADvBnQgRgKgOgNQgGABgGgBQgOgDgGgLQgHgCgGgFIgBAAQgJAAgGgEQgFACgGAAQgPAAgGgNQgHAFgKABQgGAAgFgDQgHAEgLgDQgLgEgEgHQgGgCgDgDQgIgCgEgFIgBgCIgDAAIgBAAIAAAAQgGAEgKgCIAAAAIgEAGQgFAJgJACQgJADgKgFIgOgHQgLgFgBgNIAAgBQgHADgKgCIgFgCIgBACQgHAWgWgFQgKAOgRgDQg+gIhCgRQgYgGAHgXQAGgYAYAGIAKACIACgLQADgWADgJQAMgkAcgBQAYgBAMARQAGgQASAAQARABAGAPIAGgBQAPAAAGAJQAFgCAGAAQAHAAAFADIACgDQAIgOARACQASACADAQIABAIIAFABQANAEAFAMIAAAAIAAAAIAAAAQAJgGAKADQAJACAFAHQAEACADACQALAEAFAJQAHgBAGAEQAFgBAGACIAIADQAKgFAMAFQAIACAEAGIAIAAQAHABAFADQAOACAFAPIABACIAGADIADABQAGABAFADIAFAAQAOABAIALQAPAVAWALQAVAMgMAVQgIAOgMAAQgHAAgHgEgACMgPIAAAAIAAAAg");
	this.shape_175.setTransform(166.9,529.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#363030").s().p("AAJAxQgKgDgEgJQgOgbgQgVQgGgIAEgLQADgLAIgFQAJgFAKADQAIADAGAIQASAaAMAXQAEAKgCAJQgCAKgJAFQgGAEgHAAIgGgBg");
	this.shape_176.setTransform(224.6,555.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#363030").s().p("AgEApQgJgBgGgHQgGgHAAgJQAAgRgCgPQAAgKAIgIQAHgHAKAAQAJgBAIAIQAEAFACAGQAIAIgBAJIgFAcQgCAJgIAGQgHADgHAAIgDAAg");
	this.shape_177.setTransform(229.4,579.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#363030").s().p("ACBCyQgNgRgNgyQgzglgrguIAAAAQgLAWgWgLIgDgCQghgRgQghQgIADgKgEQgGgDgEgEQgGADgJgCQgRgDgKgIQgLgHgHgQQgFgKADgKQgcgXAIgaQACgHAEgFIgPgDIgGgBQgVgDADgYQAEgYAUACQAXADA1ADQAvAGAWAVQAMAMAFAPQAzAEAsAWIAOAHQARACARAJQAiAUAIAoIABAEQAWASAPAcQAMAZARBAQAHAXgZAHQgVAGgHgRIACAfQABAUgSADIgIABQgNAAgIgLg");
	this.shape_178.setTransform(206,543.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#363030").s().p("AEiB1Qh4hSioguQhzghjDgdQgYgDAHgYQAHgYAXADQDGAdB3AiQCrAxB6BTQAUANgMAWQgIANgKAAQgHAAgIgFg");
	this.shape_179.setTransform(189.2,528);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#363030").s().p("AgaCSQgYgHAGgXQAgh0AJh6QACgYAYAAQAZAAgCAYQgJCBgiB6QgEASgQAAIgJgBg");
	this.shape_180.setTransform(229.4,598);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#363030").s().p("AA+CmQgZAAgCgYQgNiVhjhxQgQgSASgSQARgSAQASQBxCAAOCqQACAYgYAAIgBAAg");
	this.shape_181.setTransform(217.8,568.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#363030").s().p("AGaDaQgOgugtgkQgagVg+ghQh6hAhXgfQh1gshrgGQh7gGhmAtQgWAKgLgUQgMgTAUgOIAGgFQgOADgIgKQgqg2Ajg0IAIgKIAAgMQAAgZAZAAQAMAAAGAGQAWgJAcgBQAMAAAHAKQAIAKgDAMIgBAEQABAGgCAHIgPAqQgDAKgGAFIgCALIAEgDQAWgMAMAVQADAFABAFQBBgNBIAEQB5AGCCAzQB5AuB1BCQA0AeAfAfQAnAnAOAwQAHAYgYAGIgKACQgQAAgFgTg");
	this.shape_182.setTransform(177.8,542.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#363030").s().p("AhqBGQgWgMAOgUQAjgxAXgXQAognAngBQARgBAMALQAGAGACAHQAPgDAOgDQAYgDAHAYQAGAYgYAEQgmAGgdALQgHADgGAAIgeAZQgTAPgRgQIgEgEIgXAfQgIAMgMAAQgHAAgIgFg");
	this.shape_183.setTransform(112.7,528.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#363030").s().p("ArCFLQADiEAchhQgDgJAGgKIAFgIQASg2AagpQBKh5CmhhIADgBQADgQAOgEQC5g+DBggQAYgEAGAXIABADIAxgGQA5gFAtACQAsACA2AOQAfAJA/ATQA4ARB0AWQBgAbAtBDQANAUgVANQgWAMgNgUQgog6higXQhygSgxgQQg3gSgggHQgwgMgrAAIgbAAIgFABIgYAEQAHAGACALQADASgPAGIgeAMIAfgDQAWgDAHATIAXgDQASgCAFAUIABAKIAGgBQAYgDAHAXQAHAYgYAFQg0ALh7A3QhpAwhFAGIgFAEQgKAHgMgFIAAgBIgBABQgrALgWgcQgEgFgFgNQgFgMgEgGQgDgEgJgIQgFAEgJAAIgEAAQhmA2hhBGQgLAJgLgGQhDA/g3BNQgHAJgIADQgVBAgFBFQgCAYgYAAIgBAAQgYAAABgYgAjXiaIABAFIAAALQAEgNAIgNIgNAKgAigi6IgKAFIAHAEIAEgHIADgEIgEACgAiMjEQAGAAAGADQAIgOARACQAGABAFADIAFgOQgcAIgZALg");
	this.shape_184.setTransform(123.8,549.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#363030").s().p("AtTH8QAIhCgEhcIgKifQgLjEAqh0QBTjiD+hmQDBhOEfgDQERgDEMA7QBxAZBJAoQBeA0AtBSQALAWgVAMQgWANgLgVQgwhZhxgwQhIgeiLgZQkOgwkDALQiNAHhoAXQiDAdhjA8QhhA6g+BZQhBBcgQBsQgOBZAMCrQANCygKBSQgDAYgZAAQgZAAADgYg");
	this.shape_185.setTransform(136.6,565);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#363030").s().p("AgPB3QgYgHAGgXQAdhggOhRQgDgXAXgHQAYgHAEAYQAQBfgfBsQgFASgPAAIgKgBg");
	this.shape_186.setTransform(221.9,555.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#363030").s().p("AsAG0IgqgtQgQgSASgSQANgNANAHIgJheQgHhdAChGQABgtACgWQAFgjALgcQAWgzAegtQBAhcBjhHQBahABwgpIADgBQAKgEAKAGIAEAEIAFAGQADAGgBAGIAAAGQgBAzA+gJQARgDBQgdQBOgeBDgTQCXgqCWAPQCZAPCBAuQCXA2BiBZQASARgSARQgSASgRgQQg8g3hUgnQhDgghfgbQjEg2idARQhKAIhiAhQhvApg4ASQg6AUgvgXQgdgOgLgbQgMACgKgFQhQAihDAxQheBEg6BZQgrBDgIAsQgFAcgBAnIAABDQACA6AHBNIANCHQACAQgRAGQgGADgFAAQgKAAgHgIg");
	this.shape_187.setTransform(134.9,579.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#DA735C").s().p("AA4BlQgcgHgOgYIgEgIQglgpgZgqQgPgZgDgMQgFgUANgRQAFgHAJACQAJABAAAKIAAALQAIACAAAKQgBALAEALIADAGIAeAqQAHAJAIAQQANASADAIIABAEQAMAPAOADQAMADgEAMQgDAKgIAAIgEgBg");
	this.shape_188.setTransform(48.2,634.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#DA735C").s().p("AAsB0QgTgZgXglIgng/IgXglQgJgVAIgUQARglAmAGQAkAGAOAjQADAGgDAEQABAEgDAFQAFARgCAQQAAAFgGAUQgFAOACAKQACAPAKAZIARAnQADAJgJAFQgEADgDAAQgFAAgDgEgAAMhWQAIABAJAEIgHgFQgJgGgHAAIAGAGg");
	this.shape_189.setTransform(48.2,632.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#DA735C").s().p("Ag2BgQgGgLAKgGQASgMAPglIABgDQgHgFAFgJIALgVQgIgEADgKIAEgIIgEgBQgLgHAHgKQANgWAKgLQAPgPATgFQAIgCAFAHQAFAGgEAHIgJAPQAGAFgDAHQgGATgPAYIgLARIgRAsQgPAmgWAOQgEACgDAAQgGAAgEgGg");
	this.shape_190.setTransform(230.6,631.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#DA735C").s().p("AhJBhQABgKAOgXQAMgTAFgOQAGgQgBgUQAAgaADgJQADgMAJgIQAAgEACgEQAGgJALgVQAJgRAQgEQAOgEANAIQANAHAGANQAJATgIAYQgFAOgQAYQgLAPgQAfQgSAigHANQgNAWgbAOQgKAGgHAAQgOAAABgYgAAMhIIgHANQACAIgHAFQgNAJABAgQABAmgEAIQgFAPgUAaQgKATAKgNQAKgLAGgKIAUgnQALgaAIgLQAWgZACgKQgLgogIAAQgEAAgEAMg");
	this.shape_191.setTransform(231.7,630.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#363030").s().p("AAFA/QgcgBgTgGQgWgIgUgQQgYgRgLgLQgSgSADgTQABgJAMgEQAUgHAggDIA2gDQA/gFBFACQASAAAAATQAAATgSgBQhUgBhLAHIgmAFIABACQAJAEANAMQANANALAEQAJAEAdABQASAAAAATQAAASgRAAIgBAAg");
	this.shape_192.setTransform(135.6,673.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#DA735C").s().p("AgDAwQhqgBhOgvQgUgMAMgVQANgWAVANQBEAqBfgBQBTAABVgfQAXgIAGAYQAHAWgXAJQhbAhhbAAIgEAAg");
	this.shape_193.setTransform(142,694.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#363030").s().p("AhGAYQgFgMAWgJIBAgdQAJgEALgBQANgBAFAGQAPgCAGAHQAFAGgHAIQgFAGgIACQgyARgrALQgKADgHAAQgMAAgDgIg");
	this.shape_194.setTransform(106.7,680.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#363030").s().p("AhFAQQgJgDAEgIQADgFAHgFQAUgLAVAGQAdAJAYgMQAbgOAOAIQAHAEgDAHQgCAGgIADQgrAWgpAAQgZAAgZgHg");
	this.shape_195.setTransform(127,676.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#363030").s().p("ADxBTIg6gQQgcgIgbgFQgLAFgSgCQgMgBgDgEQgKACgPABQgWAAAEgLIgHAAIgQAAQgLAHgSAAQgKAAgFgDIgLACQg2AIgSABQgVABgNgDQgLgDgIgHQgHACgLABQgaACAFgRIAEgSQgOAOgRANQgJAHgUAAQgWAAAEgPIAAgBIgEAEQgJAJgXACQgaADAFgRQAPg8AlgxQAKgOAcABQAcAAgMAQIgEAGIABgBQAKgKAaABQALAAAEADQAJgGAPgDQAZgEAAATIAAAJIAMgPQAIgJAYgCQAZgCgEARIgFASIAIgMQAKgNAagCQAKgBAFACQAIgKAYgDQAXgCAAAMIAOgCIAJABQAKgFAOgBQAagBgGATIARgDQAagCgGAQIgLAbIABAAQAYgDgCASIgCAJIAGgBQAVAAgCAOIgBAFQBLALBEAfQAQAIgQANQgOAMgMABIgKAAQgXAAgagGg");
	this.shape_196.setTransform(152.2,674.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#363030").s().p("AE9BYQgTgmgMgUQgTgfgXgUQgggbgxAAIhYALQhGAHhWgGIhFgHQgBAxhOBKQgHAGgYADQgaADAFgLIADgFQgJAEgPADQgXAEABgPIAAgBQgIAGgTACQgcAEAFgMQAKgXANgVQAJghAXgZQAIgfANgMQAMgLATgGQASgGAQACQAOACAHAHQARgDAPADQAJADAHAEIBGAJQA9AHAvAAQAfABA+gJQA9gJAgABQA+ABAuAwQAhAhAiBGQAFALgcAJQgLADgIAAQgMAAgEgIg");
	this.shape_197.setTransform(140.1,671.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#363030").s().p("AFgA7QgPgBgYgNIgrgWQgZgLgXAEQgGABgNAFQgMAFgHABQgUADgdgNQgggNgQAAQgOAAgiAIQgeAGgSgCQgKgBgTgGQgUgHgJgBQgOgCgTACIgiAFQgaAEgbgCIgzgHQgLgCgaADQggAFgKABQgdABgNgOIg3AYQgYAKgOgRQgPgRAbgLIBYgnQAOgGANADQAPAEAAAPIAmgEQAngEAGABIAkAJQAVAFAQgBQAQgCAigGQAXgDAYADQARACAdAHQAWAGAkgGQArgIARABQAMAAAeANQAbAKAPgCQAPgCAZgHQAWgEATAEQAOADAjATQAgARAQAAIAlgDQAVgDASAIQAYAKgSATQgTAUgUgJQgLgFgTAEQgVAFgIAAIgBAAg");
	this.shape_198.setTransform(142.1,681.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#363030").s().p("AGJB0IhShnIgggpQgUgZgRgNQgbgUgxABQgNAAhEAHQhZAKgWABQgrABhIgNQhPgPgigBQg9gDgcA2IgWAwQgNAfgPARQgHAJgbADQgbACAJgKQAOgRANglQAOgoALgPQAZgkA3gTQA0gRBFAJQAoAGBSAPQAyAGBsgOQBngNA3AJQAgAGAaAXQAOAMAeAmIBjB8QAIAKgcAJQgOAFgJAAQgIAAgDgEg");
	this.shape_199.setTransform(143,673.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#363030").s().p("ACoAqQhMg4hfAAQhdAAhRA1QgPAKgWgFQgVgFAWgPQBlhCB1gDQB8gDBdBEQALAJgaALQgQAGgKAAQgIAAgFgEg");
	this.shape_200.setTransform(106.1,594.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#363030").s().p("AjOAnQgWgLAGgFQBWhMCEALQBvAJBsBAQASALgSAAQgSgBgKgGQhZg1hhgCQhpgChJBBQgDACgFAAQgHAAgOgGg");
	this.shape_201.setTransform(173.5,593.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AiDBAQg3gaAAgmQAAglA3gaQA2gcBNABQBOgBA2AcQA3AaAAAlQAAAmg3AaQg2AbhOAAQhNAAg2gbg");
	this.shape_202.setTransform(174.9,614);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DA735C").s().p("AiDBSQg3giAAgwQAAgvA3giQA2giBNAAQBOAAA2AiQA3AiAAAvQAAAwg3AiQg2AihOAAQhNAAg2gig");
	this.shape_203.setTransform(174.9,611.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AiEBAQg3gaAAgmQAAglA3gaQA3gcBNABQBOgBA3AcQA3AaAAAlQAAAmg3AaQg3AbhOAAQhNAAg3gbg");
	this.shape_204.setTransform(108.8,614);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#DA735C").s().p("AiEBSQg3giAAgwQAAgvA3giQA3giBNAAQBOAAA3AiQA3AiAAAvQAAAwg3AiQg3AihOAAQhNAAg3gig");
	this.shape_205.setTransform(108.8,611.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C9846F").s().p("AACB4Qgkg6gPgmQgYg8AOgsQANglAkgLQAlgMAdAaQASAQgSASQgSASgSgQQgSgQgJAYQgIAUADARQACAOAKAZQAQAsAdAsQANAVgVAMQgJAGgHAAQgLAAgIgNg");
	this.shape_206.setTransform(43.5,628.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C9846F").s().p("AA5CaIhGhBQgZgZgQgWQgSADgGgPQgmhWAZhYQAEgOAOgDQANgDALAJIAEAEQAHgGALACQAOADAGAKQAVgIAYAHQAgAKAPAgQAKAWgVANQgWAMgKgWQgGgNgHgHIADAPQAEAXADArIgBAAIABAHQABAHgCAEIACAaQABASgRAFIBFBDQARARgSASQgJAJgJAAQgIAAgJgJg");
	this.shape_207.setTransform(52.9,637.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C9846F").s().p("ABgDCQhgg1gwgsQhIhCgMhQQgFglAJghQAKglAagVQAegZApAHQAdAFApAYQAVANgNAVQgMAWgVgMQgcgSgQgEQgbgGgSASQgSASgBAjQgBAyAjAyQAcAoAxAjQAbASBDAkQAWAMgNAVQgIAOgMAAQgHAAgHgDg");
	this.shape_208.setTransform(51.2,636.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C9846F").s().p("ABKC0QhEg7g0hMQgfgrgOgZQgXgrgDgjQgEghASgXQARgYAhgFQAdgDAcAQQAUALAdAaQARAQgRASQgSARgSgQIgRgSQgMgMgIAAIguAjQAFARAHAOQAPAgAbAnQAuBJBMBCQASAQgSARQgJAJgJAAQgJAAgJgHg");
	this.shape_209.setTransform(51.8,633.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C9846F").s().p("AgjBPQgVgNAJgWIAzhxQAKgWAVANQAWAMgKAWIgyByQgGAOgLAAQgHAAgIgFg");
	this.shape_210.setTransform(231,631);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#C9846F").s().p("AhJCyQgVgJAHgUIAFgOQgIAEgNgFQgVgJAHgUQAOgrASgnQgRgIAEgTIAFgRQgIgKAEgMQASg3AignQArgxAxAIQAyAHAQA0QAMAogKA2QgEAXgYgGQgFgCgEgCQglBehBBHQgGAHgHABIgFAHQgHAMgMAAQgFAAgHgCgAgDgJIgWAvIgIAOIAEgFQATgjAQghIAOgZIAAAAQgKAIgNAdg");
	this.shape_211.setTransform(231.3,629);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#C9846F").s().p("AhxC6QgKgRAOgNQA4g0AYgbIAOgPIABgCIAYghQAPgVAKgUQATgogFgqQgEgmgbgGQgDADgEAFQgUAKgbAcIgWAZQgBAXAHAbQAHAWgYAHQgYAGgHgWQgGgVgCgTIgBgBQgSgSAQgSIAEgGIABgFQAJgwAkgaQAggYAkABQAQgHAPAAQAlgCAYAgQAVAegBAmQAAAqgYAuQgHANgMASIgJAQQgNAUgUAYQgdApgRAVQgkAsglANIgIACQgMAAgIgOg");
	this.shape_212.setTransform(232.1,633.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#DA735C").s().p("AgwAjQgYgVgWgjQgMgUAVgNQAWgMAMAUIACACIAEAEIAYAZQALAKAJAFIAJgDQAGgDAIgLQANgSAbgNQAPgIAMAKQAMAKgDAQQgCANgNAKIgWASIgUAXQgLALgOADIgMACQgYAAgcgZg");
	this.shape_213.setTransform(140.6,657.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#DA735C").s().p("AAOArQgTgIgMgOQgFgHgBgIIgCgCIAAAAIAAAAIAAAAIgBAAQgKgCgFgIQgFgKACgJQACgKAKgFQAJgFAKACQAOAEAOAPIAXAZQAOAMgLASQgIAOgLAAQgEAAgEgCg");
	this.shape_214.setTransform(137.2,657.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#DA735C").s().p("AhMB7QgJgHABgMIgBhCQAAgwAFghQAQhiBFAIQBFAIAGBUQABAPgBA4QgBArAGAUQAGAXgYAHQgYAHgGgYQgHgXAFg8QAEg2gLgaQgNgbgRAFQgRAGgIAcQgDALgBAQIAAAbIgDBPIACAGIACAJQAGAXgZAHIgJABQgNAAgFgLg");
	this.shape_215.setTransform(141.2,624.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#DA735C").s().p("AgxAMQgHgWAXgGQAUgEAJANQAAgOgDgVQgEgWARgHQAJgEAJADQAKADADAIQAMAaACAbQACAcgKAZQgDAJgGAFQgIAMgPACIgHABQghAAgUg+g");
	this.shape_216.setTransform(150.1,653.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#DA735C").s().p("AgNDEQgNgLAEgPQAIgcgQAOQgUAWgFAEIgDADIgCADQgKANgPAAQgLAAgHgGQANAIASgKQgIADgHgBQgPAAgKgIQAEAFAFADQgGgDgFgIIgFgGQgKgNgCgWQgBgNALgGIACgFIADgEIAAgGQACgYAZAAQASAAAEAMQgDgNADgQIASg9IA5i/QAGgUAVADQAVADABAVIAAAKQAKAFADAKQAHAYgEAdIgCANQAPAHgDAUIgCAMQAEADADAFQALATgCAgIAAAAQAJASgCAXQAHAEACALQAHAkALAmQAHAYgYAGQgYAHgHgYIgFgPQgGACgIgCIgEgBQgEADgFABIgCAPQgCAUgSAEQgGAJgJAHQgGAFgHAAQgGAAgIgHg");
	this.shape_217.setTransform(138.7,639.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#DA735C").s().p("AAODNQgXgBAAgZQAAgZAXABQAKABgNgxIgPg0QgKgfgKgnQgKgpgIgoIgFglQgEgXgIgLQgOgUAVgMQAWgNAOAUQANASAFAjIAJA5QAQBMAWBBQARA2AAAkQgBA4gvAAIgEAAg");
	this.shape_218.setTransform(148,637.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#DA735C").s().p("AhaDPQgYgHAHgXIBek3IAOgvQAMgZAYgCQAjgCAgAvQAOAUgWANQgWANgNgUQgNgTgIAQQgEAIgEATIhbEwQgFASgQAAIgKgCg");
	this.shape_219.setTransform(136.8,634.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#DA735C").s().p("AgKDlQgIgGgHgaQgGgZgHgDQgCgBgaAJQgbAKgIgCQgOgEgJgKQgHgJgGgQQgDgHAEgJQADgIAHgEIAUgLIADgCQAshnAZhvQAGgzAJgcQAPgyAkACQAWACAOAgQAKAXAGApIALBCIAbCFIAMA0QAIAfgDAUQgEAggaAGQgbAHgSgcIgHgKQgDAJgDARQgFAOgEAHQgGALgKAEQgIAEgHAAQgLAAgKgIgAgHB/QAIAHAHAMIADAIIAGgQQAIgTAPgHQASgIATAMIAGAFQAIArACgTQABgOgLgKIgCgIIgujmQgEghgGgOQgBgCAAgCQAAgBgBAAQAAgBAAAAQAAAAAAABIABASQgGBIgdBZQgSAygbBAIAPgFIAHgBQAPAAAMAJg");
	this.shape_220.setTransform(139.6,639.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EDEDED").s().p("Ag3B/Qg8g1gWg2QBQgiBRhRIBDhKIAuAlQAFATgMAQIiCELQgYgQgfgbg");
	this.shape_221.setTransform(154.5,752.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EDEDED").s().p("AiKhhQgIgLADgNIAug0IBHBPQBXBVBUAhQgXA2g9A2QgeAagaARg");
	this.shape_222.setTransform(126.2,751.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#C9846F").s().p("Ak2OuQiehDh6h6Qh6h6hDieQhFijAAizIAAoKQAAj/C2i3QC2i2EAAAIHJAAQEAAAC2C2QC2C3AAD/IAAJJQAACmhACYQg/CShxByQhxBxiTA+QiYBBimAAQixAAikhGg");
	this.shape_223.setTransform(140.4,627.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#DA735C").s().p("Ah8CtQg3gRgogeIAAhRIABgPQgBgHgFgHQgGgTgPgOQgPgQgTgGIgDgCQAVhBBOgqQBOgqBnAAQB2AABTA4QBVA4AABOIAAADQgeAOgKAJQgRANAAAWIAAA1QgnAkg8AVQg8AUhGAAQhAABg6gTg");
	this.shape_224.setTransform(140,720.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#C9846F").s().p("AjfITIAAwlIG/AAIAAQlg");
	this.shape_225.setTransform(140.4,736.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154}]},75).to({state:[]},25).to({state:[]},38).wait(268));

	// kigge-borgmester
	this.instance_17 = new lib.Symbol3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(137.9,924.2,1,1,0,0,0,103.5,277.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(60).to({_off:false},0).wait(1).to({regY:277,x:138.1,y:913.6},0).wait(1).to({x:138.3,y:903.1},0).wait(1).to({x:138.5,y:892.6},0).wait(1).to({x:138.7,y:882.1},0).wait(1).to({x:138.9,y:871.5},0).wait(1).to({x:139.1,y:861},0).wait(1).to({x:139.3,y:850.5},0).wait(1).to({x:139.5,y:840},0).wait(1).to({x:139.7,y:829.5},0).wait(1).to({x:139.9,y:819},0).wait(1).to({x:140.1,y:808.5},0).wait(1).to({x:140.3,y:798},0).wait(1).to({x:140.5,y:787.5},0).wait(1).to({x:140.8,y:777},0).wait(30).to({x:140.7,y:765.2},0).wait(1).to({x:140.6,y:753.4},0).wait(1).to({y:741.7},0).wait(1).to({x:140.5,y:729.9},0).wait(1).to({y:718.1},0).wait(1).to({x:140.4,y:706.4},0).wait(1).to({x:140.3,y:694.6},0).wait(1).to({y:682.8},0).wait(1).to({x:140.2,y:671.1},0).wait(1).to({y:659.3},0).wait(1).to({x:140.1,y:647.5},0).wait(1).to({x:140,y:635.8},0).wait(1).to({y:624},0).wait(1).to({x:139.9,y:612.2},0).wait(1).to({y:600.5},0).wait(1).to({x:139.8,y:588.7},0).wait(1).to({y:576.9},0).wait(1).to({x:139.7,y:565.2},0).wait(1).to({x:139.6,y:553.4},0).wait(1).to({y:541.6},0).wait(1).to({x:139.5,y:529.9},0).wait(1).to({y:518.1},0).wait(1).to({x:139.4,y:506.3},0).wait(1).to({x:139.3,y:494.6},0).wait(1).to({y:482.8},0).wait(1).to({x:139.2,y:471},0).wait(1).to({y:459.3},0).wait(1).to({x:139.1,y:447.5},0).wait(1).to({x:139,y:435.7},0).wait(1).to({y:424},0).wait(1).to({x:138.9,y:412.2},0).wait(1).to({y:400.4},0).wait(1).to({x:138.8,y:388.7},0).wait(1).to({y:376.9},0).to({_off:true},1).wait(268));

	// tekst
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000066").s().p("AgkC/QgIgFgFgFIgLgXIhyj5QgKgWgHgHQgIgIgOgCQgRgDAAgRQAAgWAdgMQAegMA2ABQA5gBAbAKQAaAIAAASQAAAMgOAKQgLAHAAAHQAAAGAFAMIAiBOQAHARAKAAQAJABAHgKQAHgJANgbIAZg5IAEgOQAAgJgNgHQgPgHAAgMQAAghBZAAQAsAAATAHQASAHAAARQAAAVgYADQgRACgFAEQgJAGgMAZIiAECQgMAYgKAJQgLAIgPABQgNgBgLgFg");
	this.shape_226.setTransform(258.5,65.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000066").s().p("AhIC5QgJgDgHgHQgFgHgBgJQAAgHAEgEIAPgOQAIgGAFgPQADgOAAgdIgBgiIgCgdQgCgLgOgGQgRgHAAgPQAAgSAXgIQAfgMAjgJQAjgIATAAQAQAAAAARIAAChQAAATADAJQAEAJALAHIALALQADAEAAAHQAAAkhbAAQgwAAgdgIgAhJhwQgRgKABgSQgBgYAjgOQAjgOAdAAQAYAAAOAKQAPAIAAAQQgBAVgVANQgiATgvAAQgVAAgLgHg");
	this.shape_227.setTransform(291.9,66.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000066").s().p("AiACiQgTgTgNgZQgRghAAghQAAgnAWgkQAUgiAigRQAdgPAcgBQAhAAAZAPIAGACQAJAAAAgYQAAgKgFgGQgFgFgNgEQgQgGAAgOQAAgUAogLQBHgUAYAAQAYAAAAAXIAAD9IACAcQABAGAJAGIAOAMQADAFAAAIQAAAWgtAMQgoAKgpAAQgIAAgDgDQgDgCAAgKQgCgPgJAAQgFAAgJAJQgcAXgiAAQgsAAgjgggAgegLQgOAYAAAqQAAAmAOAUQAKAOAQgBQARAAAJgUQAHgVABgwQAAgpgKgOQgHgMgOAAQgTAAgKATg");
	this.shape_228.setTransform(320.8,66.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000066").s().p("AgUCLIgfgDIgIAAIgMACQgNAAgHgHQgMgKgKgWQgKgXABgPQgBgaAVAAQAHAAAHAGIAbAbIATARQAIAEAIAAQAKAAAFgEQAGgGAAgIQgBgNgVgJQgtgWgTgYQgUgXAAgeQgBghAVgYQAdgiAyAAQANAAAgAGIAKABIASgFIALgDQANABANAQQAKANAHAPQAHAQAAALQAAALgIAIQgHAIgMgBQgKABgHgFIgagVQgRgRgMAAQgHAAgHAFQgFAGAAAIQAAAOAaAMQAvAUAZAZQAWAVgBAeQABAngjAaQgdAXgqgBg");
	this.shape_229.setTransform(352.6,71.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000066").s().p("Ag1CXQgbgaAAgpIAAh/QAAgFgBgDIgIgCIgdAAQgIABgDgDQgCgDAAgKIAAgMQAAgIAHgEIB+hQIALgDIAXAAQAHAAADAEQACACAAAKIAAAlQAAAJACADQADACAJAAIAzAAQALAAADAEQACADAAANIAAAQQABANgEAGQgEAFgLAAIgxAAQgIAAgEADQgCACAAAIIAABeQAAAQAIALQAIAKANAAQALAAASgKIAIgDQAHABAGAHQAFAJAAAJQAAASgTAQQgoAhg3AAQgsAAgbgZg");
	this.shape_230.setTransform(379.2,68);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000066").s().p("AhdBsQgUgQgMgYQgQgfAAgjQAAguAcglQAYghAmgPQAcgMAgAAQA2AAAkAeQATAPAMAUQANAYgBAWQAAASgHAMQgIAKgMAAIiBAAQgIAAAAAIQAAASATAQQASAQAXAAQANAAARgFQAQgGALgHQAJgHAGAAQAHAAAHAJQAHAJAAAJQAAAUgaATQgrAhg6AAQg6AAgngigAgRhPQgIALAAAMQAAAIAEAEQAEADAKAAIAcAAQARAAAAgQQAAgPgIgKQgJgJgOAAQgOAAgKAMg");
	this.shape_231.setTransform(407.6,71.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000066").s().p("Ah/CiQgVgTgMgZQgRghAAghQAAgnAWgkQAUgiAjgRQAcgPAcgBQAhAAAZAPIAGACQAJAAAAgYQAAgKgFgGQgFgFgMgEQgRgGAAgOQAAgUAngLQBIgUAYAAQAYAAAAAXIAAD9IACAcQACAGAIAGIAOAMQADAFAAAIQAAAWgtAMQgpAKgoAAQgJAAgCgDQgDgCgBgKQgBgPgJAAQgFAAgJAJQgcAXgiAAQgsAAgigggAgegLQgOAYAAAqQAAAmAOAUQAJAOARgBQARAAAJgUQAHgVAAgwQABgpgKgOQgHgMgOAAQgSAAgLATg");
	this.shape_232.setTransform(455.6,66.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000066").s().p("AArCKQgFgEgBgIQgBgSgKAAIgFACIgRALQgcATggAAQg2AAgVgfQgTgZAAg+IABgmIAAgMQgBgYgEgMQgFgLgKgGIgOgJQgDgEAAgFQAAgWAfgHQA3gMA2AAQARAAAAAOIAACWQAAAxAfAAQAIAAAIgFQAIgEADgHQAGgOAAgtQAAgtgDgRIgEgKIgLgIQgPgIAAgNQAAgRAbgHQA0gNAyAAQAcAAAAAeIAAANIgBAgIAAB6QAAAKAQAHQANAHAAANQAAAZg6AOQgkAIggAAQgOAAgEgDg");
	this.shape_233.setTransform(493.2,71.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000066").s().p("AgZBrQgKgGABgIQAAgFAKgRIALgWIAGgTQAAgKgKgEQgTgGgHgHQgYgTAAggQAAgZARgSQAUgWAcAAQANAAANAGQAOAHAJALQAVAbAAAoQAAAWgIAbQgJAcgNAWQgWAlgXAAQgKAAgIgHg");
	this.shape_234.setTransform(520.9,83.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000066").s().p("AAaB7QgGgIgFAAQgGAAgJAHQgbAVgjgBQgkAAgXgPQgOgLgKgQQgIgQAAgSQAAgeAYgWQAkgiBJAAQAPAAAFgDQADgDAAgMQAAgdgFgOQgGgNgOAAQgJAAgGAFIgRASQgYAjgbAAQgOABgIgJQgJgHAAgOQAAgNALgOQAKgMATgLQAygbA2AAQAwAAAiAZQASANAHARQAHARAAAeIAAAoQAAArAFAMIAGAIIAMAEQAJABAAAKQAAANgLAPQgLAPgRAKQgUAMgXgBQgdAAgRgTgAgfAcQgJAKAAAOQAAAOAGAJQAHAHAKAAQAWABAAgmQAAgPgEgGQgBgFgKgBQgMABgJAJg");
	this.shape_235.setTransform(560,71.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000066").s().p("Ag1CXQgbgaAAgpIAAh/QAAgFgBgDIgIgCIgdAAQgIABgDgDQgCgDAAgKIAAgMQAAgIAHgEIB+hQIALgDIAXAAQAHAAADAEQACACAAAKIAAAlQAAAJACADQADACAJAAIAzAAQALAAADAEQACADAAANIAAAQQABANgEAGQgEAFgLAAIgxAAQgIAAgEADQgCACAAAIIAABeQAAAQAIALQAIAKANAAQALAAASgKIAIgDQAHABAGAHQAFAJAAAJQAAASgTAQQgoAhg3AAQgsAAgbgZg");
	this.shape_236.setTransform(379.2,68);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000066").s().p("AgtAvQgUgTAAgcQAAgcAUgSQAUgSAZgBQAaAAAUATQAUASAAAdQAAAbgUATQgUATgaAAQgZAAgUgTg");
	this.shape_237.setTransform(611,79);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000066").s().p("AgtAvQgUgTAAgcQAAgcAUgSQAUgSAZgBQAaAAAUATQAUASAAAdQAAAbgUATQgUATgaAAQgZAAgUgTg");
	this.shape_238.setTransform(611,79);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000066").s().p("AgsBqQgWgFgKgGQgIgFgGgRQgGgRAAgPQAAgIADgEQAEgFAGAAQAGAAAGAGIAPAWQAGAJAMAGQANAFANAAQAMAAAGgEQAHgEAAgHQAAgGgFgFQgGgEgMgEQgWgHgMgGQgLgGgLgJQgYgVAAgbQAAgOAGgNQAHgNALgKQAbgWAlAAQAPAAAbAIIAFABIAJgDIAFgBQALAAALARQAMAQAAAPQAAAJgFAGQgFAGgIAAQgGAAgEgCIgRgPQgTgSgSAAQgJAAgEAFQgFAEAAAHQAAANAXAHQAgAKAJAEQAoATAAAlQAAAhgbAVQgcAWgsAAQgUAAgWgFg");
	this.shape_239.setTransform(269.7,135.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000066").s().p("AgoBoQgFgCgDgDQgEgEAAgFQAAgFACgCIAJgHQAEgEACgIQADgIAAgQIgBgUIgCgQQAAgGgIgDQgKgEAAgIQAAgKANgFQASgHATgFQATgEALAAQAJAAAAAJIAABaQAAALACAFQABAFAGAEIAHAGQACACAAAEQAAAUgzAAQgbAAgQgEgAgpg+QgJgGAAgKQAAgOAUgHQATgIAQAAQAOAAAHAFQAJAFgBAJQABAMgMAHQgUALgZAAQgMAAgHgEg");
	this.shape_240.setTransform(285.7,135.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000066").s().p("AglBoQgGgCgEgEQgDgFAAgEQAAgEACgCIAIgFQAGgDACgMQACgUAAglQAAgmgCgKQgCgLgJgGQgGgDgDgEQgCgDAAgFQAAgIAHgFQAHgGARgFIAagGIAZgDQANAAAAAPIgCAXIgCAzIAAAyIABAmQABAGAHADIAHAEQACADAAAEQAAAFgDAEQgEAEgGACQgLADgbAAQgdAAgMgEg");
	this.shape_241.setTransform(297.2,135.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000066").s().p("AhiBpQgFgBgEgEQgEgGAAgFQAAgFAHgFIAHgFIACgHQAEgWAAgtIAAghQAAgRgCgGQgCgEgHgBQgNgCAAgJQAAgGAGgFQAGgFAMgEQApgPAUAAQAJAAAAAHIgCAyIAAAVIABASQABAHAFAAQAFAAAKgGQAIgGAAgDIgDgGQgDgEAAgCQAAgRAqgBQAVABANAEQAFABADAFQADAEAAAFQAAAHgGACIgJADQgHABgLAIQgLAGAAADQAAACANASIAZAhIALAMIAMAIQALAGAAAHQAAAIgHAGQgHAEgNAAIgyAAQgKAAgFgHIgZghIgNgQIgDgCQgBAAAAAAQgBAAAAAAQAAABAAAAQgBABAAAAIgBALQAAAHACADQACADAFAFQAEAEAAAFQAAAMgLAEQgMAFgaABQggAAgJgEg");
	this.shape_242.setTransform(314.9,135.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000066").s().p("Ag0A9QgLgJgHgOQgJgRAAgUQAAgZAQgVQANgSAWgJQAQgHARAAQAeAAAVARQAKAIAHAMQAHANAAANQAAAKgEAGQgFAGgGAAIhIAAQgGAAAAAEQABAKAKAJQALAJAMAAQAIAAAJgDQAJgDAGgEQAFgEADAAQAFAAADAFQAFAFAAAGQAAALgPAKQgYATghAAQggAAgWgTgAgJgsQgEAHAAAGQgBAFACACQADACAFAAIAPAAQAKAAAAgKQAAgIgFgFQgEgGgJAAQgHAAgFAHg");
	this.shape_243.setTransform(334.5,138.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000066").s().p("AgVBpQgNgEgPgKIgDgCIgKADIgKACQgJAAAAgGIABgFQACgKABgPIABgwIAAgqQAAgQgBgEQgBgEgGgCQgIgEgDgDQgDgEAAgFQAAgKAWgKQAMgGATgDQASgFANAAQAIAAAAAKIgCA9IAAADQAAABAAABQAAAAAAAAQABABAAAAQABAAAAAAIAGgEQASgPAVAAQAXAAAQAQQAVAUAAAfQAAAtgiAbQgYAUghAAQgQAAgNgEgAgFACQgDAEAAAOQAAAkACANQADAMAKAAQALAAAHgKQAFgJAAgTQABgbgLgMQgFgHgIAAQgIAAgEAFg");
	this.shape_244.setTransform(352.7,135.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000066").s().p("AhDA7QgXgVAAghQAAgkAcgXQAcgZAoAAQAdAAAWAPQAPAKAJASQAKASAAASQAAAigfAXQgeAXglAAQgmAAgWgVgAgQglQgFAEAAAJQABAJADAQQADAQAGAMQAEANAKAAQAOAAAAgRQAAgOgEgQQgDgQgFgLQgFgLgIAAQgHAAgEAGg");
	this.shape_245.setTransform(372.7,138.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000066").s().p("AhFBKQgNgEAAgLQAAgIAKgHIAGgFIACgHQACgOABglQgBgHgBgDQgCgDgEgCQgLgFAAgIQgBgHAJgGQAHgFASgGQAYgHARAAQAHAAACACQACADABAMQABAHAEAAQADAAADgEQANgUATAAQAPAAAJAJQAFAFACAHQADAHAAAHQAAAHgDAIQgEAIgFAFQgKAJgPAAQgIAAgFgDQgFgDgJgIQgEgDgDAAQgEAAgBAFQgCAEAAAPQAAAYACAIQABAFACACIAJAEQANAEAAAKQABAHgFAFQgEAEgIACQgPADgcAAQgbAAgPgFg");
	this.shape_246.setTransform(390.9,138.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000066").s().p("AhCBmQgLgFgFgIQgHgIAAgJQABgGADgFQADgFAFgCQAGgCgBgCQAAgCgDgDQgNgLAAgLQAAgIAGgHQAGgIAJgEQADgCABgCQgBgCgEgEQgQgPAAgUQAAgKAFgKQAGgJAKgHQAZgQAfAAQAMAAAOADIAUACQARAAARgNIAGgDQADAAAEAFQADAEAAAGQAAAGgFAJQgEAIgFAFQgEADAAACIAAADIABAGQAAATgMAMQgMAMgSAGQgRAGgVAAIgKAAIgGgBQgIAAAAAHQAAAGAFADQAFADAKAAIASgCQAZgDAMAAQATAAAJAGQAJAEAEAJQAGAIAAAKQgBAQgLAOQgOASgbAIQgUAHgbAAQgjAAgVgLgAgsBCQAAAJAKAGQALAGAPAAQAPAAAJgEQAIgEABgIQgBgDgDgDQgDgDgFAAIgHABIgTABIgPgBIgJgBIgCAAQgFAAAAAEgAgShKQgFAGAAAKQABARAEAKQAFAKAJAAQAIAAAEgGQAFgGAAgLQAAgRgFgJQgFgJgJAAQgHAAgFAFg");
	this.shape_247.setTransform(408.7,140.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000066").s().p("AgLBOIgRgCIgFABIgGAAQgIAAgEgDQgGgGgGgMQgFgNAAgIQAAgPALAAQAEAAAEADIAPAPIALAJQAEADAFAAQAFAAADgDQADgCAAgFQAAgHgMgFQgZgNgLgNQgLgMAAgRQAAgTALgOQARgSAcAAQAHAAARADIAGAAIAKgDIAHgBQAHAAAHAJQAGAIAEAJQADAIAAAGQAAAHgEAEQgEAEgHAAQgFAAgFgCIgNgMQgKgKgHAAQgEAAgDAEQgEADAAAEQAAAIAPAGQAaAMAOANQAMAMAAARQAAAWgTAOQgQANgYAAg");
	this.shape_248.setTransform(425.4,138.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000066").s().p("AgUBpQgNgEgQgKIgEgCIgJADIgKACQgJAAAAgGIABgFQACgKABgPIABgwIAAgqQAAgQgBgEQgBgEgFgCQgJgEgDgDQgDgEAAgFQAAgKAWgKQAMgGATgDQASgFANAAQAIAAAAAKIgCA9IAAADQAAABAAABQAAAAAAAAQABABAAAAQABAAAAAAIAGgEQASgPAVAAQAXAAAQAQQAVAUAAAfQAAAtgiAbQgYAUghAAQgPAAgNgEgAgFACQgDAEAAAOQAAAkACANQADAMAKAAQALAAAHgKQAFgJAAgTQAAgbgKgMQgGgHgHAAQgIAAgEAFg");
	this.shape_249.setTransform(450.9,135.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000066").s().p("AhEA7QgWgVAAghQAAgkAcgXQAcgZAoAAQAdAAAVAPQAQAKAJASQAKASAAASQAAAigfAXQgeAXglAAQglAAgYgVgAgQglQgFAEAAAJQAAAJAEAQQADAQAGAMQAEANAKAAQAOAAAAgRQAAgOgDgQQgEgQgFgLQgFgLgIAAQgHAAgEAGg");
	this.shape_250.setTransform(470.9,138.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000066").s().p("AhFBKQgNgEAAgLQAAgIAKgHIAGgFIACgHQACgOABglQgBgHgBgDQgCgDgEgCQgLgFAAgIQgBgHAJgGQAHgFASgGQAYgHARAAQAHAAACACQACADABAMQABAHAEAAQADAAADgEQANgUATAAQAPAAAJAJQAEAFADAHQADAHAAAHQAAAHgDAIQgEAIgFAFQgKAJgPAAQgIAAgFgDQgFgDgKgIQgCgDgEAAQgEAAgBAFQgBAEAAAPQAAAYABAIQABAFACACIAIAEQAPAEAAAKQAAAHgFAFQgFAEgHACQgPADgcAAQgcAAgOgFg");
	this.shape_251.setTransform(489.1,138.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000066").s().p("AhCBmQgLgFgFgIQgHgIAAgJQABgGADgFQADgFAGgCQAEgCAAgCQAAgCgDgDQgNgLAAgLQAAgIAGgHQAGgIAJgEQADgCAAgCQAAgCgEgEQgQgPAAgUQAAgKAFgKQAGgJAKgHQAagQAeAAQAMAAAOADIAUACQARAAARgNIAGgDQADAAAEAFQADAEAAAGQgBAGgDAJQgFAIgFAFQgEADAAACIAAADIABAGQAAATgMAMQgMAMgRAGQgSAGgVAAIgKAAIgGgBQgIAAAAAHQAAAGAFADQAFADAKAAIASgCQAZgDAMAAQATAAAJAGQAJAEAFAJQAEAIAAAKQAAAQgLAOQgOASgbAIQgVAHgaAAQgjAAgVgLgAgsBCQABAJAJAGQALAGAPAAQAPAAAJgEQAJgEAAgIQgBgDgDgDQgDgDgFAAIgHABIgTABIgPgBIgJgBIgCAAQgFAAAAAEgAgShKQgFAGABAKQAAARAEAKQAFAKAJAAQAHAAAFgGQAFgGAAgLQAAgRgFgJQgFgJgJAAQgHAAgFAFg");
	this.shape_252.setTransform(506.9,140.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000066").s().p("ABHBKQgNgFAAgJIABgEIAGgJQAFgGAAgkQAAgVgDgIQgEgKgKABQgFAAgEADQgEADgCAFIgBAcIACAhQABAFAGAKIACAGQAAASgwAAQgdAAgKgDQgIgEAAgJIABgFIAHgHIAEgHIACgKIABgiQAAgfgQABQgLgBgDANQgCANAAAWIABAXQABAEADAHQAEAGAAAEQAAAKgOAFQgQADgTAAQgYAAgLgDQgLgEAAgJIABgEIAHgHQAHgHABgLIACgnQAAgPgBgGQgCgGgFgEIgGgFIgBgFQAAgKAQgHQAogOATAAQAJAAAAAMIAAADIAAAFQAAAIAFAAQADAAAGgHQAIgJANgGQANgGANAAQAZAAAKATQAEAHADAAQABAAAHgGQAUgUAaAAQAUAAANALQANALAAAYIAAARIAAAXIAAASIgBAGQAAAKAHAHIAEAGIABAEQAAAUgvAAQgVAAgMgFg");
	this.shape_253.setTransform(531.4,138.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000066").s().p("Ag0A9QgLgJgHgOQgJgRAAgUQAAgZAQgVQANgSAWgJQAQgHARAAQAeAAAVARQAKAIAHAMQAHANAAANQAAAKgEAGQgFAGgGAAIhIAAQgGAAAAAEQABAKAKAJQALAJAMAAQAIAAAJgDQAJgDAGgEQAFgEADAAQAFAAADAFQAFAFAAAGQAAALgPAKQgYATghAAQggAAgWgTgAgJgsQgEAHAAAGQAAAFABACQADACAFAAIAPAAQAKAAAAgKQAAgIgFgFQgEgGgIAAQgIAAgFAHg");
	this.shape_254.setTransform(555.4,138.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000066").s().p("AgLBOIgRgCIgFABIgGAAQgIAAgEgDQgGgGgGgMQgFgNAAgIQAAgPALAAQAEAAAEADIAPAPIALAJQAEADAFAAQAFAAADgDQADgCAAgFQAAgHgMgFQgZgNgLgNQgLgMAAgRQAAgTALgOQARgSAcAAQAHAAARADIAGAAIAKgDIAHgBQAHAAAHAJQAGAIAEAJQADAIAAAGQAAAHgEAEQgEAEgHAAQgFAAgFgCIgNgMQgKgKgHAAQgEAAgDAEQgEADAAAEQAAAIAPAGQAaAMAOANQAMAMAAARQAAAWgTAOQgQANgYAAg");
	this.shape_255.setTransform(425.4,138.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000066").s().p("AgdBVQgQgOABgXIAAhIIgBgEIgFgBIgQAAQgEAAgCgBQgBgCAAgFIAAgHQAAgFADgCIBHgtIAHgCIAMAAQAEAAACACQABACAAAFIAAAVQAAAFABACQABABAGAAIAcAAQAGAAACACQABACAAAHIAAAJQABAIgCADQgDADgFAAIgcAAQgFAAgCABQgBACAAAEIAAA0QAAAJAEAGQAFAGAHAAQAHAAAKgFIAEgCQAEAAADAFQADAEAAAFQAAAKgLAJQgWATgfAAQgYAAgPgOg");
	this.shape_256.setTransform(586.3,136.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000066").s().p("Ag0A9QgLgJgHgOQgJgRAAgUQAAgZAQgVQAOgSAVgJQAQgHASAAQAdAAAVARQAKAIAGAMQAIANAAANQAAAKgEAGQgFAGgGAAIhJAAQgEAAAAAEQAAAKALAJQAKAJAMAAQAIAAAJgDQAJgDAGgEQAGgEACAAQAFAAAEAFQADAFAAAGQAAALgOAKQgZATggAAQggAAgWgTgAgJgsQgFAHABAGQAAAFACACQACACAGAAIAOAAQAKAAAAgKQAAgIgFgFQgEgGgIAAQgIAAgFAHg");
	this.shape_257.setTransform(602.3,138.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000066").s().p("AhFBKQgNgEAAgLQAAgIAKgHIAGgFIACgHQADgOgBglQABgHgCgDQgCgDgEgCQgMgFAAgIQAAgHAJgGQAHgFASgGQAYgHARAAQAHAAACACQACADABAMQABAHAEAAQADAAADgEQAMgUAVAAQAOAAAJAJQAEAFADAHQADAHAAAHQAAAHgDAIQgEAIgFAFQgLAJgOAAQgIAAgFgDQgFgDgKgIQgCgDgEAAQgEAAgBAFQgBAEAAAPQAAAYABAIQABAFACACIAIAEQAPAEAAAKQAAAHgFAFQgFAEgHACQgPADgcAAQgcAAgOgFg");
	this.shape_258.setTransform(619.3,138.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000066").s().p("AgVBpQgNgEgPgKIgDgCIgKADIgKACQgKAAABgGIABgFQACgKABgPIABgwIAAgqQAAgQgBgEQgBgEgGgCQgIgEgDgDQgDgEAAgFQAAgKAWgKQAMgGATgDQASgFANAAQAIAAAAAKIgCA9IAAADQAAABAAABQAAAAAAABQABAAAAAAQAAAAABAAIAGgEQARgPAWAAQAXAAAQAQQAVAUAAAfQAAAtgiAbQgYAUghAAQgQAAgNgEgAgFACQgDAEAAAOQAAAkADANQACAMAKAAQAMAAAFgKQAHgJgBgTQABgbgLgMQgFgHgJAAQgHAAgEAFg");
	this.shape_259.setTransform(293.2,191.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000066").s().p("AglBoQgGgCgEgEQgDgFAAgEQAAgEACgCIAIgFQAGgDACgMQACgUAAglQAAgmgCgKQgCgLgJgGQgGgDgDgEQgCgDAAgFQAAgIAHgFQAHgGARgFIAagGIAZgDQANAAAAAPIgCAXIgCAzIAAAyIABAmQABAGAHADIAHAEQACADAAAEQAAAFgDAEQgEAEgGACQgLADgbAAQgdAAgMgEg");
	this.shape_260.setTransform(297.2,135.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000066").s().p("Ag0A9QgLgJgHgOQgJgRAAgUQAAgZAQgVQANgSAWgJQAQgHARAAQAeAAAVARQAKAIAHAMQAHANAAANQAAAKgEAGQgFAGgGAAIhIAAQgGAAAAAEQABAKAKAJQALAJAMAAQAIAAAJgDQAJgDAGgEQAFgEAEAAQADAAAEAFQAFAFAAAGQAAALgPAKQgYATghAAQggAAgWgTgAgJgsQgEAHgBAGQAAAFACACQADACAFAAIAPAAQAKAAAAgKQAAgIgEgFQgFgGgJAAQgHAAgFAHg");
	this.shape_261.setTransform(323.8,194.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000066").s().p("AgMBKQgKgKgHgOIgthTQgDgHgEgDQgDgDgGgCQgMgDAAgJQABgKAOgFQAOgDAhAAQAaAAAMADQAMAEAAAIQAAAGgGAFIgEAFIgBAFQABAEAFANQAHAMAGAAQAEAAACgDIAJgQQAFgJABgEQgBgEgFgFQgFgFAAgGQAAgHAKgDQAKgDAWAAQAhAAAAANQAAAIgMAEQgJACgDAEQgEADgGANIgoBOQgKASgGAIQgHAGgHABQgHAAgEgGg");
	this.shape_262.setTransform(341.9,194.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000066").s().p("AgMBKQgKgKgHgOIgshTQgEgHgEgDQgDgDgGgCQgLgDAAgJQAAgKAOgFQAPgDAfAAQAbAAANADQALAEAAAIQAAAGgGAFIgEAFIAAAFQAAAEAFANQAHAMAGAAQAEAAADgDIAJgQQAEgJAAgEQAAgEgEgFQgGgFAAgGQAAgHAKgDQAKgDAXAAQAfAAAAANQAAAIgLAEQgJACgDAEQgDADgHANIgpBOQgJASgHAIQgGAGgGABQgIAAgEgGg");
	this.shape_263.setTransform(370,194.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000066").s().p("AAPBFQgEgEgCAAQgEAAgEAEQgPALgUAAQgVAAgNgIQgHgGgFgJQgFgKgBgKQAAgQAOgNQAVgSAogBQAJAAACgCQACgBAAgHQAAgRgCgGQgEgIgIAAQgFAAgDACIgJALQgOAUgQAAQgHAAgFgFQgFgFAAgGQABgIAFgHQAHgIAKgGQAcgPAdAAQAcAAATAOQAKAHAEAKQAEAJAAARIAAAWQAAAZADAGIADAFIAGACQAFABABAFQAAAIgGAIQgHAIgJAGQgMAGgNAAQgQAAgJgLgAgRAQQgFAGAAAIQAAAHAEAFQAEAEAGABQALAAAAgWQAAgIgCgDQgBgDgFAAQgHAAgFAFg");
	this.shape_264.setTransform(388.3,194.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000066").s().p("AglBoQgGgCgEgEQgDgFAAgEQAAgEACgCIAIgFQAGgDACgMQACgUAAglQAAgmgCgKQgCgLgJgGQgGgDgDgEQgCgDAAgFQAAgIAHgFQAHgGARgFIAagGIAZgDQANAAAAAPIgCAXIgCAzIAAAyIABAmQABAGAHADIAHAEQACADAAAEQAAAFgDAEQgEAEgGACQgLADgbAAQgdAAgMgEg");
	this.shape_265.setTransform(297.2,135.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000066").s().p("AhDBmQgJgFgGgIQgHgIABgJQAAgGADgFQAEgFAEgCQAGgCAAgCQAAgCgFgDQgMgLAAgLQAAgIAGgHQAGgIAJgEQAEgCAAgCQAAgCgFgEQgQgPAAgUQAAgKAFgKQAGgJALgHQAZgQAeAAQALAAAPADIAUACQARAAARgNIAGgDQADAAADAFQAEAEAAAGQgBAGgEAJQgEAIgFAFQgEADAAACIABADIAAAGQAAATgNAMQgLAMgSAGQgRAGgUAAIgKAAIgHgBQgIAAAAAHQAAAGAGADQAEADAKAAIARgCQAagDAMAAQASAAALAGQAIAEAEAJQAGAIAAAKQAAAQgMAOQgOASgaAIQgWAHgaAAQgjAAgWgLgAgrBCQgBAJAKAGQALAGAQAAQAOAAAJgEQAIgEABgIQAAgDgEgDQgDgDgFAAIgIABIgSABIgPgBIgJgBIgDAAQgDAAAAAEgAgShKQgEAGgBAKQAAARAGAKQAEAKAJAAQAHAAAFgGQAFgGAAgLQAAgRgFgJQgFgJgJAAQgHAAgFAFg");
	this.shape_266.setTransform(418.4,196.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000066").s().p("AgeBVQgPgOAAgXIAAhIIgBgEIgEgBIgQAAQgFAAgBgBQgBgCAAgFIAAgHQAAgFAEgCIBGgtIAGgCIANAAQAEAAABACQACACAAAFIAAAVQAAAFACACQABABAEAAIAeAAQAGAAABACQACACAAAHIAAAJQgBAIgCADQgBADgHAAIgcAAQgEAAgBABQgCACAAAEIAAA0QAAAJAFAGQAEAGAHAAQAGAAAKgFIAFgCQADAAAEAFQADAEAAAFQAAAKgKAJQgXATgfAAQgZAAgPgOg");
	this.shape_267.setTransform(434.7,192.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000066").s().p("ABHBKQgNgFAAgIIABgFIAGgJQAFgGAAgkQAAgUgDgJQgEgKgKAAQgFAAgEAEQgEADgCAFIgBAdIACAfQABAGAGAKIACAGQAAATgwAAQgdAAgKgFQgIgDAAgJIABgGIAHgGIAEgHIACgKIABgiQAAgegQAAQgLAAgDAMQgCANAAAWIABAWQABAFADAHQAEAGAAAFQAAAKgOADQgQAFgTAAQgYgBgLgDQgLgEAAgJIABgEIAHgHQAHgHABgLIACgoQAAgOgBgGQgCgGgFgEIgGgFIgBgFQAAgKAQgHQAogOATAAQAJAAAAANIAAACIAAAFQAAAIAFAAQADAAAGgHQAIgJANgGQANgGANAAQAZAAAKATQAEAHADAAQABAAAHgGQAUgUAaAAQAUAAANALQANALAAAYIAAAQIAAAYIAAASIgBAGQAAAJAHAIIAEAGIABAEQAAAUgvAAQgVAAgMgFg");
	this.shape_268.setTransform(465.7,194.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000066").s().p("Ag0A9QgLgJgHgOQgJgRAAgUQAAgZAQgVQANgSAWgJQAQgHARAAQAeAAAVARQAKAIAHAMQAHANAAANQAAAKgEAGQgFAGgGAAIhIAAQgGAAAAAEQABAKAKAJQALAJAMAAQAIAAAJgDQAJgDAGgEQAFgEADAAQAFAAADAFQAFAFAAAGQAAALgPAKQgYATghAAQggAAgWgTgAgJgsQgEAHAAAGQgBAFACACQADACAFAAIAPAAQAKAAAAgKQAAgIgFgFQgEgGgJAAQgHAAgFAHg");
	this.shape_269.setTransform(334.5,138.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000066").s().p("AhHBbQgMgLgGgOQgKgSAAgTQAAgWANgTQAKgTAUgKQAQgJAQAAQASAAANAIIAFACQAEAAAAgOQAAgGgDgDQgCgDgHgCQgJgDAAgIQAAgLAVgHQAogLAOAAQAOAAAAANIAACOIAAAPQABAEAGADIAHAHQACADAAAEQAAANgZAGQgXAGgWAAQgFAAgCgCQgCgBAAgGQgBgIgFAAQgDAAgFAFQgPANgUAAQgXAAgUgSgAgQgGQgJAOABAXQgBAVAJALQAFAIAJAAQAKAAAEgMQAFgMgBgaQABgXgGgIQgEgGgHAAQgLAAgFAKg");
	this.shape_270.setTransform(508.6,191.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000066").s().p("AhzBqQgGgBgDgEQgEgEAAgGQAAgIAKgGIAGgGIADgLQADgSAAglQAAgqgDgTQgBgHgDgDQgCgEgFgDQgJgFAAgJQAAgHAFgFQAGgEAMgDQAQgDAYAAQAYAAAMAFQALAEAAAMQAAAEgCADIgIAIQgDACgCAIQgCAJAAAIQAAANAGAAQAEAAADgDIAOgQQAKgPAAgFIgCgIIgCgIQAAgLAMgFQAMgFAeAAQAYAAAMADQAOAEAAANQAAAFgDAEQgDAFgEABIgPABQgJAAgEACQgEACgGAGIgRAQQgJAJAAAHQAAAEACAEIAIALIA6BCIALAMIAJAFQAIADAEAFQADAEAAAHQAAARgXAAIg8AAQgGAAgDgDQgEgDgHgKQgMgRgTgVIgNgNQgDgDgDAAQgJAAAAARQAAAOAGAGIAFADQAIAGAAAIQAAAKgOAFQgNAEghAAQgdAAgNgEg");
	this.shape_271.setTransform(540.3,191);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000066").s().p("AhRBXQgOgMgGgQQgGgPAAgdIACglIAAgYQAAgNgCgFQgCgFgHgFQgKgGAAgJQAAgGAGgEQAEgFAJgCQASgDAXAAQAZAAASAEQARAEAAANQgBAGgEAEIgKAFQgFACgCAGQgCAGAAANIgBA6QgBAbAQAOQAMALATAAQAMAAALgEQAKgFAFgIQAEgGACgHQACgIgBgNIAAghQgBgogBgGQgBgHgJgEQgIgEgDgDQgDgDAAgEQAAgKALgEQALgEAZAAQAZAAAKAEQALAEAAAKQAAAEgCACIgKAHQgIAFgBAFQgBAFgBAjIAAAlQAAAjgFAOQgLAegmAOQgXAIgbAAQgyAAgfgXg");
	this.shape_272.setTransform(566.5,191);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000066").s().p("ABMBsIgLgJIhchUQgKgIgGgBQgKAAAAAbQAAAWADAIQACAIAIADQAKAFAAAJQAAAWgvAAQgVgBgLgFQgMgGAAgJQAAgGACgCIAKgIQAHgEACgLQADgVAAglQAAgogFgSQgCgHgCgDQgDgDgGgDQgHgEgDgDQgDgDAAgFQAAgPAagEIAfgBQAMAAAGACQAGACAHAHIBNBEQALAJAFAAQAIAAAAgRQAAgUgCgHQgDgHgHgEQgGgDgDgDQgCgDAAgFQAAgNASgEQAHgCASAAQAYAAAJADQAPAEAAANQAAAJgMAFIgHAEIgDAFQgEAKAAAdIAAAyIAAAgQAAAbgDAMQgEAQgLAAQgFAAgEgCg");
	this.shape_273.setTransform(592.8,191);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#990000").s().p("AkhGRQhegng1hDQgogxAAhEQAAhaBfg8QAkgWAAgKQAAgKgegZQhNhBAAhZQAAh8CNhLQB8hACvABQCogBCPAxQBOAbAwA3QAkApAAA1QgBBThoA7QggARABALQAAAKAmAWQAzAfAgA0QAgAyAAA3QAABRhEBPQh4CJkEAAQizAAiMg3gAjEBuQgMAOAAAYQAAAcAQAgQAQAhAZAVQA5AzBUAAQAwABAegUQAdgTAAgfQAAgigbgXQgdgVhYglQhVgigjgBQgTAAgKAQgAgik1QgZAQAAAXQAAAkA7AmQBAAqApAAQAWAAAQgYQARgZAAgfQAAgpgkgXQgrgbg6AAQgjAAgWAQg");
	this.shape_274.setTransform(534.7,298.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#990000").s().p("AkgGRQhfgng1hDQgogxgBhEQABhaBgg8QAjgWAAgKQAAgKgfgZQhMhBAAhZQAAh8CNhLQB8hACvABQCogBCOAxQBPAbAwA3QAjApAAA1QABBThpA7QgfARgBALQABAKAlAWQA1AfAfA0QAfAyAAA3QAABRhDBPQh4CJkFAAQiyAAiLg3gAjFBuQgLAOAAAYQAAAcAQAgQAQAhAYAVQA6AzBVAAQAwABAdgUQAdgTABgfQgBgigbgXQgcgVhZglQhVgigkgBQgSAAgLAQgAgjk1QgYAQAAAXQAAAkA7AmQBAAqAqAAQAUAAARgYQARgZAAgfQAAgpgjgXQgsgbg6AAQgjAAgXAQg");
	this.shape_275.setTransform(435.7,298.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#990000").s().p("AEEGvIgbgcQgPgUgOgGIg0gGIokAAQhIABAAglQAAgSAPgQIBjhVQCciABLhuQAmg4AAgpQAAgkgXgUQgXgVgoAAQglAAgTAJIhWA5QgRANgdAAQgmAAgggaQgggaAAgeQAAgbAdgjQAdgjAwggQCuhtDTAAQChAABpA2QAwAZAdAsQAdAtAAAxQAAB7jDCQQhFAyAAAaQAAAUAUAOQAVAOAeAAQBHgBA4gvIAmgeIAZgEQBGAAAABqQAAA0gWA2QgXA3goAoQgqAqgyAAQgUAAgMgHg");
	this.shape_276.setTransform(335.5,305.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#990000").s().p("Al9IRQh9gyhGhYQg1hDAAhYQAAh4B+hPQAvgdAAgOQAAgMgogiQhlhVAAh2QAAikC7hiQCjhVDmAAQDfAAC8BBQBnAjBABKQAvA1AABGQAABuiKBNQgqAXAAAOQAAANAyAeQBFApAqBEQApBDAABIQAABshZBmQifC3lXAAQjsAAi4hKgAkECRQgPATAAAgQAAAkAVArQAVArAgAcQBNBEBvAAQBAAAAngZQAmgaAAgpQAAgtgkgdQglgdh1gwQhxgugvgBQgYAAgOAVgAgumYQggAVAAAeQAAAxBNAxQBWA4A2AAQAbAAAXggQAWghAAgpQAAg3gvgdQg5gkhNAAQguAAgeAVg");
	this.shape_277.setTransform(566.3,300.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#990000").s().p("Al9IRQh9gyhGhYQg1hDAAhYQAAh4B+hPQAvgdAAgOQAAgMgogiQhlhVAAh2QAAikC7hiQCjhVDmAAQDfAAC8BBQBnAjBABKQAvA1AABGQAABuiKBNQgqAXAAAOQAAANAyAeQBFApAqBEQApBDAABIQAABshZBmQifC3lXAAQjsAAi4hKgAkECRQgPATAAAgQAAAkAVArQAVArAgAcQBNBEBvAAQBAAAAngZQAmgaAAgpQAAgtgkgdQglgdh1gwQhxgugvgBQgYAAgOAVgAgumYQggAVAAAeQAAAxBNAxQBWA4A2AAQAbAAAXggQAWghAAgpQAAg3gvgdQg5gkhNAAQguAAgeAVg");
	this.shape_278.setTransform(435.6,300.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#990000").s().p("AFXI5IgkglQgTgagSgIIhFgIIrUAAQhgABAAgwQAAgYAVgUICChyQDOipBjiSQAzhKAAg2QAAgugfgbQgfgcg0AAQgxAAgaAMIhwBLQgYARgmAAQgyAAgpgiQgrgiAAgoQAAglAmgtQAngvA+gpQDmiQEXAAQDVAACLBHQA/AiAmA6QAmA6AABBQAACjkBC+QhcBDAAAiQAAAZAcAUQAcARAnAAQBeAABJhAIAygmIAhgGQBeAAAACLQAABGgeBJQgfBHg0A0Qg3A4hCAAQgbAAgQgJg");
	this.shape_279.setTransform(303.4,309.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#990000").s().p("AkhGRQhegng1hDQgogxAAhEQAAhaBfg8QAkgWAAgKQAAgKgegZQhNhBAAhZQAAh8CNhLQB8hACvABQCogBCPAxQBOAbAwA3QAkApAAA1QgBBThoA7QggARABALQAAAKAmAWQAzAfAgA0QAgAyAAA3QAABRhEBPQh4CJkEAAQizAAiMg3gAjEBuQgMAOAAAYQAAAcAQAgQAQAhAZAVQA5AzBUAAQAwABAegUQAdgTAAgfQAAgigbgXQgdgVhYglQhVgigjgBQgTAAgKAQgAgik1QgZAQAAAXQAAAlA7AlQBAAqApAAQAWAAAQgYQARgZAAgfQAAgpgkgXQgrgbg6AAQgjAAgWAQg");
	this.shape_280.setTransform(534.7,298.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#990000").s().p("AkgGRQhfgng1hDQgogxgBhEQABhaBgg8QAjgWAAgKQAAgKgfgZQhMhBAAhZQAAh8CNhLQB8hACvABQCogBCOAxQBPAbAwA3QAjApAAA1QABBThpA7QgfARgBALQABAKAlAWQA1AfAfA0QAfAyAAA3QAABRhDBPQh4CJkFAAQiyAAiLg3gAjFBuQgLAOAAAYQAAAcAQAgQAQAhAYAVQA6AzBVAAQAwABAdgUQAdgTABgfQgBgigbgXQgcgVhZglQhVgigkgBQgSAAgLAQgAgjk1QgYAQAAAXQAAAlA7AlQBAAqAqAAQAUAAARgYQARgZAAgfQAAgpgjgXQgsgbg6AAQgjAAgXAQg");
	this.shape_281.setTransform(435.7,298.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000066").s().p("AgLBOIgRgBIgFAAIgGABQgIgBgEgDQgGgGgGgNQgFgMAAgJQAAgOALAAQAEAAAEADIAPAPIALAKQAEACAFAAQAFAAADgCQADgDAAgFQAAgHgMgGQgZgMgLgNQgLgMAAgSQAAgSALgNQARgUAcAAQAHAAARAEIAGABIAKgDIAHgCQAHAAAHAJQAGAIAEAIQADAJAAAHQAAAGgEAEQgEAEgHAAQgFAAgFgDIgNgLQgKgKgHAAQgEAAgDADQgEADAAAFQAAAHAPAIQAaALAOAOQAMALAAASQAAAVgTAPQgQAMgYAAg");
	this.shape_282.setTransform(369.6,391.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000066").s().p("AgeBVQgOgOAAgXIAAhIIgBgEIgFgBIgQAAQgFAAgBgBQgBgCAAgFIAAgHQAAgFAEgCIBGgtIAHgCIAMAAQAEAAACACQABACAAAFIAAAVQAAAFACACQAAABAGAAIAdAAQAFAAACACQABACABAHIAAAJQAAAIgCADQgDADgFAAIgcAAQgFAAgBABQgCACAAAEIAAA0QAAAJAEAGQAFAGAHAAQAHAAAJgFIAFgCQAEAAADAFQADAEAAAFQAAAKgKAJQgXATgfAAQgZAAgPgOg");
	this.shape_283.setTransform(384.5,389.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000066").s().p("Ag0A9QgLgJgHgOQgJgRAAgUQAAgZAQgVQAOgSAVgJQAPgHATAAQAdAAAVARQAKAIAGAMQAIANAAANQAAAKgEAGQgEAGgHAAIhIAAQgFAAgBAEQAAAKAMAJQAJAJANAAQAHAAAKgDQAJgDAGgEQAGgEADAAQADAAAFAFQADAFAAAGQAAALgOAKQgZATggAAQggAAgWgTgAgJgsQgFAHAAAGQAAAFADACQACACAFAAIAPAAQAKAAAAgKQAAgIgEgFQgGgGgIAAQgHAAgFAHg");
	this.shape_284.setTransform(400.5,391.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000066").s().p("ABHBKQgNgFAAgIIABgFIAGgJQAFgGAAglQAAgUgDgIQgEgJgKAAQgFgBgEADQgEAEgCAEIgBAeIACAfQABAGAGAKIACAGQAAASgwABQgdgBgKgEQgIgDAAgJIABgGIAHgHIAEgFIACgMIABghQAAgegQgBQgLABgDANQgCAMAAAWIABAWQABAFADAGQAEAHAAAFQAAAJgOAEQgQAEgTABQgYAAgLgEQgLgEAAgIIABgGIAHgHQAHgGABgLIACgoQAAgOgBgGQgCgGgFgDIgGgGIgBgFQAAgLAQgFQAogPATAAQAJAAAAAMIAAAEIAAADQAAAJAFAAQADAAAGgHQAIgJANgGQANgGANAAQAZAAAKATQAEAHADAAQABAAAHgGQAUgUAaAAQAUAAANALQANAMAAAXIAAAQIAAAYIAAATIgBAEQAAAKAHAIIAEAGIABAEQAAAUgvAAQgVAAgMgFg");
	this.shape_285.setTransform(424.3,391.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000066").s().p("ABHBKQgNgFAAgIIABgFIAGgJQAFgGAAglQAAgUgDgIQgEgJgKAAQgFgBgEADQgEAEgCAEIgBAeIACAfQABAGAGAKIACAGQAAASgwABQgdgBgKgEQgIgDAAgJIABgGIAHgHIAEgFIACgMIABghQAAgegQgBQgLABgDANQgCAMAAAWIABAWQABAFADAGQAEAHAAAFQAAAJgOAEQgQAEgTABQgYAAgLgEQgLgEAAgIIABgGIAHgHQAHgGABgLIACgoQAAgOgBgGQgCgGgFgDIgGgGIgBgFQAAgLAQgFQAogPATAAQAJAAAAAMIAAAEIAAADQAAAJAFAAQADAAAGgHQAIgJANgGQANgGANAAQAZAAAKATQAEAHADAAQABAAAHgGQAUgUAaAAQAUAAANALQANAMAAAXIAAAQIAAAYIAAATIgBAEQAAAKAHAIIAEAGIABAEQAAAUgvAAQgVAAgMgFg");
	this.shape_286.setTransform(424.3,391.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000066").s().p("Ag0A9QgLgJgHgOQgJgRAAgUQAAgZAQgVQAOgSAVgJQAPgHASAAQAeAAAVARQAKAIAHAMQAHANAAANQAAAKgEAGQgFAGgGAAIhIAAQgGAAAAAEQAAAKAMAJQAJAJANAAQAHAAAKgDQAJgDAGgEQAFgEAEAAQADAAAFAFQADAFAAAGQAAALgOAKQgZATggAAQggAAgWgTgAgJgsQgEAHgBAGQAAAFACACQADACAFAAIAPAAQAKAAAAgKQAAgIgEgFQgGgGgIAAQgHAAgFAHg");
	this.shape_287.setTransform(479.1,391.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000066").s().p("AhFBKQgNgEAAgLQAAgIAKgHIAGgFIACgHQACgOABglQgBgHgBgDQgBgDgFgCQgLgFAAgIQAAgHAIgGQAHgFASgGQAYgHARAAQAHAAACACQACADABAMQABAHAEAAQADAAADgEQANgUATAAQAPAAAJAJQAFAFACAHQADAHAAAHQAAAHgDAIQgEAIgFAFQgLAJgOAAQgIAAgFgDQgGgDgIgIQgDgDgEAAQgEAAgBAFQgCAEAAAPQAAAYACAIQABAFADACIAIAEQANAEAAAKQABAHgFAFQgEAEgIACQgPADgcAAQgbAAgPgFg");
	this.shape_288.setTransform(496.1,391.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000066").s().p("AgZAbQgLgLAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgOAAgLgKg");
	this.shape_289.setTransform(507.2,396.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000066").s().p("AgZAbQgLgLAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgOAAgLgKg");
	this.shape_290.setTransform(507.2,396.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000066").s().p("AgZAbQgLgLAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgOAAgLgKg");
	this.shape_291.setTransform(507.2,396.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_226}]},47).to({state:[{t:this.shape_226},{t:this.shape_227}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_230,p:{x:379.2}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_230,p:{x:379.2}},{t:this.shape_231}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_230,p:{x:379.2}},{t:this.shape_231}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_230,p:{x:379.2}},{t:this.shape_231},{t:this.shape_232}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_230,p:{x:379.2}},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_230,p:{x:379.2}},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_230,p:{x:379.2}},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_230,p:{x:379.2}},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_237,p:{x:611}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239}]},9).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_248,p:{x:425.4}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_248,p:{x:425.4}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_248,p:{x:425.4}},{t:this.shape_249}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_248,p:{x:425.4}},{t:this.shape_249},{t:this.shape_250}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_248,p:{x:425.4}},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_248,p:{x:425.4}},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_248,p:{x:425.4}},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_248,p:{x:425.4}},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259}]},81).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_260,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_241,p:{x:309.4,y:191.1}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_260,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_241,p:{x:309.4,y:191.1}},{t:this.shape_261}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_260,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_241,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_260,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_241,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_260,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_241,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_260,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_241,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274}]},5).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277}]},5).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280}]},5).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282}]},5).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284},{t:this.shape_285,p:{x:424.3}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284},{t:this.shape_286},{t:this.shape_285,p:{x:455.1}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284},{t:this.shape_286},{t:this.shape_285,p:{x:455.1}},{t:this.shape_287}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284},{t:this.shape_286},{t:this.shape_285,p:{x:455.1}},{t:this.shape_287},{t:this.shape_288}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284},{t:this.shape_286},{t:this.shape_285,p:{x:455.1}},{t:this.shape_287},{t:this.shape_288},{t:this.shape_289,p:{x:507.2}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284},{t:this.shape_286},{t:this.shape_285,p:{x:455.1}},{t:this.shape_287},{t:this.shape_288},{t:this.shape_290,p:{x:507.2}},{t:this.shape_289,p:{x:516.8}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284},{t:this.shape_286},{t:this.shape_285,p:{x:455.1}},{t:this.shape_287},{t:this.shape_288},{t:this.shape_291},{t:this.shape_290,p:{x:516.8}},{t:this.shape_289,p:{x:526.3}}]},2).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_265},{t:this.shape_242},{t:this.shape_269},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258},{t:this.shape_259},{t:this.shape_260,p:{x:309.4,y:191.1}},{t:this.shape_261},{t:this.shape_262},{t:this.shape_263},{t:this.shape_264},{t:this.shape_241,p:{x:403.2,y:191.1}},{t:this.shape_266},{t:this.shape_267},{t:this.shape_268},{t:this.shape_243,p:{x:489.7,y:194.1}},{t:this.shape_270},{t:this.shape_271},{t:this.shape_272},{t:this.shape_273},{t:this.shape_276},{t:this.shape_281},{t:this.shape_280},{t:this.shape_282},{t:this.shape_283},{t:this.shape_284},{t:this.shape_286},{t:this.shape_285,p:{x:455.1}},{t:this.shape_287},{t:this.shape_288},{t:this.shape_291},{t:this.shape_290,p:{x:516.8}},{t:this.shape_289,p:{x:526.3}}]},8).to({state:[{t:this.shape_226},{t:this.shape_227},{t:this.shape_228},{t:this.shape_229},{t:this.shape_236},{t:this.shape_231},{t:this.shape_232},{t:this.shape_233},{t:this.shape_234},{t:this.shape_235},{t:this.shape_230,p:{x:588.9}},{t:this.shape_238},{t:this.shape_237,p:{x:628.1}},{t:this.shape_239},{t:this.shape_240},{t:this.shape_241,p:{x:297.2,y:135.5}},{t:this.shape_242},{t:this.shape_243,p:{x:334.5,y:138.5}},{t:this.shape_244},{t:this.shape_245},{t:this.shape_246},{t:this.shape_247},{t:this.shape_255},{t:this.shape_249},{t:this.shape_250},{t:this.shape_251},{t:this.shape_252},{t:this.shape_253},{t:this.shape_254},{t:this.shape_248,p:{x:571.4}},{t:this.shape_256},{t:this.shape_257},{t:this.shape_258}]},15).to({state:[]},1).wait(105));

	// HEY3
	this.instance_18 = new lib.Tween7("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(349.5,505.7);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween8("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(324.2,534.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},19).to({state:[{t:this.instance_19}]},5).to({state:[]},16).wait(366));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).to({_off:true,x:324.2,y:534.4},5).wait(382));

	// HEY2
	this.instance_20 = new lib.Tween4("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(349.5,311.5);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween5("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(320.9,337.3);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween6("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(349.5,311.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},9).to({state:[{t:this.instance_21}]},5).to({state:[{t:this.instance_22}]},5).to({state:[]},21).wait(366));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(9).to({_off:false},0).to({_off:true,x:320.9,y:337.3},5).wait(392));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({_off:false},5).to({_off:true,x:349.5,y:311.5},5).wait(387));

	// HEY1
	this.instance_23 = new lib.Tween3("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(349.5,123.9);

	this.instance_24 = new lib.Tween1("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(320.7,149.7);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween2("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(349.5,123.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.instance_24}]},4).to({state:[{t:this.instance_25}]},5).to({state:[]},31).wait(366));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true,x:320.7,y:149.7},4).wait(402));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:false},4).to({_off:true,x:349.5,y:123.9},5).wait(397));

	// baggrund
	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#33CCFF").s().p("EhZ7AbeMB1Sh1cMA+lA+hInUHUMhlMBlVIoyIyg");
	this.shape_292.setTransform(117.5,126.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#43D9EC").s().p("EgyqAyxIAAgMMBlMhlVIAIAAMAAABlhg");
	this.shape_293.setTransform(322.9,322.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_293},{t:this.shape_292}]}).to({state:[{t:this.shape_293},{t:this.shape_292}]},405).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.1,-129.6,1151.2,1151.7);
// library properties:
lib.properties = {
	width: 640,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;