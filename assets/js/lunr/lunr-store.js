var store = [{
        "title": "Joker - Hack The Box",
        "excerpt":"Joker was a hard box with a Http-Proxy-Squid that allows us through the TFTP to retrieve the username and password. The credentials we retrieve can be used to access the site where, bruteforcing the directories we will find a Python Console. After taking a shell, we will use sudo to...","categories": ["hackthebox"],
        "tags": ["Joker","Squid-Proxy","Sudo Abuse","SymLink"],
        "url": "https://ezploisite.it/htb-writeup-joker/",
        "teaser":"https://ezploisite.it/assets/images/htb-writeup-joker/joker_logo.png"},{
        "title": "Holiday - Hack The Box",
        "excerpt":"Holiday was a hard box with a SQL Injection through a post form to retrieve credentials to login. Once gained access, we can stole the admin cookie with an XSS stored in the web page. After that, we can perform command injection through a form, bypassing the regex and obtain...","categories": ["hackthebox"],
        "tags": ["Holiday","SQL Injection","XSS Stored","Command Injection","Sudo npm"],
        "url": "https://ezploisite.it/htb-writeup-holiday/",
        "teaser":"https://ezploisite.it/assets/images/htb-writeup-holiday/holiday_logo.webp"},{
        "title": "Kotarak - Hack The Box",
        "excerpt":"Kotarak was a hard box with a SSRF through a form on a webpage that allow us to retrieve the credentials from a backup files. We can login on Apache Tomcat and upload a .RAW reverse shell to get an entry point with the webserver user Tomcat. We will find...","categories": ["hackthebox"],
        "tags": ["Kotarak","SSRF","NTDS files","WGET Vulnerable"],
        "url": "https://ezploisite.it/htb-writeup-kotarak/",
        "teaser":"https://ezploisite.it/assets/images/htb-writeup-kotarak/kotarak_logo.png"}]
