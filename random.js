<script>
	var entries = [
		{{#all_entries}}
          {{#metadata.tweet}}
            {title: "{{title}}", url: "{{url}}", date: "{{date}}", tweet: "{{metadata.tweet}}"},
          {{/metadata.tweet}}
         {{/all_entries}}
        ];
        
        // We don't want to pick from the first six entries since
        // they're already on the page.
        entries = entries.slice(6);
		
        // Pick one of the remaining entries at random
        var entry = entries[Math.floor(Math.random()*entries.length)];
        var html = '<a href="' + entry.url +'">' + entry.title + '</a>' + ' ' + '<span class="small">' + entry.date + '</span><br /><span class="small italics">' + entry.tweet + '</span>';
          
	document.getElementById('random').innerHTML = html;
</script>