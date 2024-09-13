async function analyze() {
    document.getElementById("loading").style.display = "block";
    url = 'https://fair-organic-gibbon.anvil.app/hello/' + encodeURIComponent(document.getElementById('input').value); // Replace with your actual URL
    let data;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const res = await response.json();
        data = res;
    } catch (error) {
        document.getElementById('results').innerHTML = `<p>Error: ${error.message}</p>`;
    }
    document.getElementById("score").innerText = data.score;
    document.getElementById("secure_connection").innerText = data.secure_connection;
    document.getElementById("directory_listing").innerText = data.directory_listing;
    document.getElementById("schema_meta_data").innerText = data.schema_meta_data;
    document.getElementById("robots_txt").innerText = data.robots_txt;
    document.getElementById("open_graph_meta").innerText = data.open_graph_meta;
    document.getElementById("www_canonicalization").innerText = data.www_canonicalization;
    document.getElementById("noindex_meta").innerText = data.noindex_meta;
    document.getElementById("canonical_tag").innerText = data.canonical_tag;
    document.getElementById("links_ratio_external_links").innerText = data.links_ratio.external_links;
    document.getElementById("links_ratio_internal_links").innerText = data.links_ratio.internal_links;
    document.getElementById("links_ratio_total_links").innerText = data.links_ratio.total_links;
    document.getElementById("keywords_in_description").innerText = data.keywords_in_description;
    document.getElementById("keywords_in_title").innerText = data.keywords_in_title;
    document.getElementById("common_keywords").innerText = data.common_keywords;
    document.getElementById("image_alt_texts").innerText = data.image_alt_texts;
    document.getElementById("h1_headings").innerText = data.h1_headings;
    document.getElementById("h2_headings").innerText = data.h2_headings;
    document.getElementById("meta_description").innerText = data.meta_description;
    document.getElementById("seo_title").innerText = data.seo_title;
    document.getElementById("minified_css").innerText = data.minified_css;
    document.getElementById("minified_js").innerText = data.minified_js;
    document.getElementById("page_size_kb").innerText = data.page_size_kb;
    document.getElementById("response_time").innerText = data.response_time;
    document.getElementById("secure_connection").innerText = data.secure_connection;

    document.getElementById("loading").style.display = "none";

}