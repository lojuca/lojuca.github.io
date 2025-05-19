function setValue(name,value)
    {
    document.getElementsByName(name)[0].value = value;
    }

    function getValue(name) 
    {
      return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(name).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
    }

