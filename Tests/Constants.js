const constants = {
    /*Main Page -> https://demoqa.com/ */
    /*Expected urls for cheks*/
      expectedUrlMainPage: 'https://demoqa.com/',
      expectedUrlElementPage: "https://demoqa.com/text-box",
      
      locatorFullNameTitle: (page) => page.getByText('Full Name'),
      locatorEmailTitle: (page) => page.getByText('Email'),
      locatorCurrentAddressTitle: (page) => page.getByText('Current Address'),
      locatorPermanentAddressTitle: (page) => page.getByText('Permanent Address'),

    };

    //locator = page.getByText('Full Name'), - не работает
    //locatorFullNameTitle: "page.getByText('Full Name')", - не работает
    
    export default constants;