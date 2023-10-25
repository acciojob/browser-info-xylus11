//your JS code here. If required.
//your JS code here. If required.
 // Get the browser name and version from the navigator object
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        // Get the element with the id "browser-info" and update its content
        const browserInfoElement = document.getElementById("browser-info");
        browserInfoElement.textContent = "You are using " + browserName + " version " + browserVersion;