function linksModel(){
  self = this;

  self.links = [
    { title: "Frequent Clicks",
      urls: [
        { "title": "Twitter", "url": "http://www.twitter.com" },
        { "title": "Feedly", "url": "http://www.feedly.com" },
        { "title": "Instagram", "url": "http://www.instagram.com" },
        { "title": "Medium", "url": "http://www.medium.com" },
        { "title": "Dropmark", "url": "http://demersdesigns.dropmark.com" },
        { "title": "Dribbble", "url": "http://dribbble.com" },
        { "title": "Instapaper", "url": "http://instapaper.com" },
        { "title": "Codepen", "url": "http://codepen.io/" },
        { "title": "GitHub", "url": "http://github.com" }
     ]
    },
    { title: "My Sites",
      urls: [
        {"title": "Google Calendar", "url": "http://calendar.google.com"},
        {"title": "Dreamhost Login", "url": "https://panel.dreamhost.com/"},
        {"title": "Firebase", "url": "https://console.firebase.google.com"},
      ]
    },
    { title: "News and Such",
      urls: [
        { "title": "Framingham Patch", "url": "http://framingham.patch.com/"},
        { "title": "Boston Globe", "url": "http://boston.com"},
        { "title": "USA Today", "url": "http://usatoday.com"}
      ]
    },
    {
      title: "Banking",
      urls: [
        {"title": "Mint", "url": "http://www.mint.com"},
        {"title": "USAA", "url": "https://www.usaa.com"},
        {"title": "Capital One 360", "url": "https://secure.capitalone360.com"},
        {"title": "Santander Bank", "url": "https://www.santanderbank.com/us/"},
        {"title": "Simple", "url": "http://www.simple.com"}
      ]
    },
    { title: "Bills",
      urls: [
        {"title": "Align", "url": "https://www.aligncu.com/"},
        {"title": "Mutual One", "url": "https://www.mutualone.com/Secure/online_banking_log_in.php"},
        {"title": "Geico", "url": "http://www.geico.com/"},
        {"title": "Subaru Finance", "url": "https://www.chase.com/online/auto-loan/subaru_motor_finance.htm"},
        {"title": "at&t Wireless", "url": "http://www.wireless.att.com/"},
        {"title": "Eversource", "url": "https://secure8.i-doxs.net/NSTAR/"},
        {"title": "Verizon", "url": "http://www.verizon.com/foryourhome/myaccount/ngen/upr/nlogin.aspx"},
        {"title": "Sears", "url": "https://www.citibank.com/us/cards/srs/"},
        {"title": "Macys", "url": "https://www.macys.com/mymacyscard"},
        {"title": "Best Buy", "url": "https://www.accountonline.com/cards/svc/LoginGet.do?siteId=PLCN_BESTBUY"},
        {"title": "BOA AMEX", "url": "http://www.bankofamerica.com"},
        {"title": "Bank One", "url": "http://www.chase.com/ccp/index.jsp?pg_name=ccpmapp/card_servicing/account_access/page/CCSMktPayBill"}
        {"title": "Geico", "url": "http://geico.com"},
        {"title": "Citizens One", url: "https://citizensoneloan.fdecs.com/eCustService/"}
      ]
    }
  ];
}

ko.applyBindings(new linksModel());
