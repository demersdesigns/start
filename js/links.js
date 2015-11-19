function linksModel(){
  self = this;

  self.links = [
    { title: "Frequent Clicks",
      urls: [
        { "title": "Twitter", "url": "http://www.twitter.com" },
        { "title": "Feedly", "url": "http://www.feedly.com" },
        { "title": "Instagram", "url": "http://www.instagram.com" },
        { "title": "Medium", "url": "http://www.medium.com" },
        { "title": "Dropmark", "url": "http://http://demersdesigns.dropmark.com" },
        { "title": "Pastry Box", "url": "http://the-pastry-box-project.net/" },
        { "title": "Dribbble", "url": "http://dribbble.com" },
        { "title": "Codepen", "url": "http://codepen.io/" },
        { "title": "GitHub", "url": "http://github.com" }
     ]
    },
    { title: "My Sites",
      urls: [
        {"title": "Google Calendar", "url": "http://calendar.google.com"},
        {"title": "Dreamhost Login", "url": "https://panel.dreamhost.com/"},
        {"title": "Google Analytics", "url": "http://www.google.com/analytics"},
        {"title": "Portfolio Site", "url": "http://www.demersdesigns.com"},
        {"title": "Evernote", "url": "https://www.evernote.com/Login.action.com"},
        {"title": "StarFun Theater Camp", "url": "http://www.starfuntheatercamp.com"}
      ]
    },
    { title: "News and Such",
      urls: [
        { "title": "Craigslist", "url": "http://boston.craigslist.org/"},
        { "title": "Framingham Patch", "url": "http://framingham.patch.com/"},
        { "title": "Boston Globe", "url": "http://boston.com"},
        { "title": "USA Today", "url": "http://usatoday.com"}
      ]
    },
    { title: "Bills",
      urls: [
        {"title": "Sovereign Bank", "url": "https://www.santanderbank.com/us/"},
        {"title": "NMTMW", "url": "https://www.nmtw.org"},
        {"title": "Mutual One", "url": "https://www.mutualone.com/Secure/online_banking_log_in.php"},
        {"title": "Finovera", "url": "http://www.finovera.com"},
        {"title": "Simple", "url": "http://www.simple.com"},
        {"title": "Mint", "url": "http://www.mint.com"},
        {"title": "Hyundai Finance", "url": "https://www.hmfusa.com/"},
        {"title": "Subaru Finance", "url": "https://www.chase.com/online/auto-loan/subaru_motor_finance.htm"},
        {"title": "Bank Of America AMEX", "url": "http://www.bankofamerica.com"},
        {"title": "Bank One", "url": "http://www.chase.com/ccp/index.jsp?pg_name=ccpmapp/card_servicing/account_access/page/CCSMktPayBill"},
        {"title": "Union Mutual of VT", "url": "http://www.unionmutual.com/"},
        {"title": "at&t Wireless", "url": "http://www.wireless.att.com/"},
        {"title": "Eversource", "url": "https://secure8.i-doxs.net/NSTAR/"},
        {"title": "Verizon", "url": "http://www.verizon.com/foryourhome/myaccount/ngen/upr/nlogin.aspx"},
        {"title": "Capital One 360", "url": "https://secure.capitalone360.com"},
        {"title": "USAA", "url": "https://www.usaa.com"},
        {"title": "Sears", "url": "https://www.citibank.com/us/cards/srs/"},
        {"title": "Macys", "url": "https://www.macys.com/mymacyscard"},
        {"title": "Best Buy", "url": "https://www.accountonline.com/cards/svc/LoginGet.do?siteId=PLCN_BESTBUY"},
        {"title": "Geico", "url": "http://geico.com"}
      ]
    },
    { title: "Tunes",
     urls: [
      { "title": "Rdio", "url": "http://www.rdio.com"},
      { "title": "Songza", "url": "http://www.songza.com"},
      { "title": "Grooveshark", "url": "http://www.grooveshark.com"},
      { "title": "Pandora", "url": "http://www.pandora.com"},
      { "title": "Last.fm", "url": "http://www.last.fm"}
     ]
    },
    { title: "House",
      urls: [
        { "title": "Houzz", "url": "http://www.houzz.com" },
        { "title": "The Kitchn", "url": "http://www.thekitchn.com/" },
        { "title": "Chow", "url": "http://www.chow.com/" }
      ]
    },
    { title: "Let's Shop",
     urls: [
       { "title": "Huckberry", "url": "http://www.huckberry.com/"},
       { "title": "Frank and Oak", "url": "http://www.frankandoak.com/"},
       { "title": "Maxton Men", "url": "http://www.maxtonmen.com/"},
       { "title": "Gilt", "url": "http://www.gilt.com"},
       { "title": "Jack Threads", "url": "http://jackthreads.com"},
       { "title": "Fab", "url": "http://www.fab.com/"},
       { "title": "Hautelook", "url": "http://www.hautelook.com/"},
       { "title": "The Grommet", "url": "http://www.thegrommet.com/"},
     ]
    }
  ];
}

ko.applyBindings(new linksModel());
