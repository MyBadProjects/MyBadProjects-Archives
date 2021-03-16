const faker = require('faker');

const addressinfo = {
    address,
    zipCode,
    zipCodeByState,
    city,
    cityPrefix,
    citySuffix,
    streetName,
    streetAddress,
    streetSuffix,
    streetPrefix,
    secondaryAddress,
    county,
    country,
    countryCode,
    state,
    stateAbbr,
    latitude,
    longitude,
    direction,
    cardinalDirection,
    ordinalDirection,
    nearbyGPSCoordinate,
    timeZone
} = require('./info/address.json');

const companyinfo = {
    company,
    companyname,
    suffixes,
    companyName,
    companySuffix,
    catchPhrase,
    bs,
    catchPhraseAdjective,
    catchPhraseDescriptor,
    catchPhraseNoun,
    bsAdjective,
    bsBuzz,
    bsNoun
} = require('./info/company.json');

const dateinfo = {
    date,
    past,
    future,
    between,
    recent,
    soon,
    month,
    weekday
} = require('./info/date.json')

const financeinfo_ = {
    financeinfo,
    account,
    accountName,
    routingNumber,
    mask,
    amount,
    transactionType,
    currencyCode,
    currencyName,
    currencySymbol,
    bitcoinAddress,
    litecoinAddress,
    creditCardNumber,
    creditCardCVV,
    ethereumAddress,
    iban,
    bic,
    transactionDescription
} = require('./info/finance.json')

const imagesinfo = {
    images,
    imgavatar,
    animals,
    business
} = require('./info/images.json')

const internetinfo = {
    internet,
    avatar,
    email,
    userName,
    password,
    ip,
    ipv6,
    url,
    mac
} = require('./info/internet.json')

const nameinfo_ = {
    nameinfo,
    firstName,
    lastName,
    middleName,
    fullName,
    findName,
    jobTitle,
    gender,
    prefix,
    suffix,
    title,
    jobDescriptor,
    jobArea,
    jobType
} = require('./info/name.json')

const phoneinfo = {
    phone,
    phoneNumber,
    phoneNumberFormat,
    phoneFormats
} = require('./info/phone.json')

const timeinfo = {
    time,
    recent
} = require('./info/time.json')

const info = {
    localization,
    seed
} = require('./info/information.json')

// Localization
faker.locale = localization;

// Seed
faker.seed(seed)

// Address
if (address==1) {
    console.log('Address:')
    if (zipCode==1) { console.log("  Zipcode: "+faker.address.zipCode()) };
    if (zipCodeByState==1) { console.log("  Zipcode by Stake: "+faker.address.zipCodeByState()) };
    if (city==1) { console.log("  City: "+faker.address.city()) };
    if (cityPrefix==1) { console.log("  City Prefix: "+faker.address.cityPrefix()) };
    if (citySuffix==1) { console.log("  City Suffix: "+faker.address.citySuffix()) };
    if (streetName==1) { console.log("  Street Name: "+faker.address.streetName()) };
    if (streetAddress==1) { console.log("  Street Address: "+faker.address.streetAddress()) };
    if (streetSuffix==1) { console.log("  Street Suffix: "+faker.address.streetSuffix()) };
    if (streetPrefix==1) { console.log("  Street Prefix: "+faker.address.streetPrefix()) };
    if (secondaryAddress==1) { console.log("  Secondary Address: "+faker.address.secondaryAddress()) };
    if (county==1) { console.log("  County: "+faker.address.county()) };
    if (country==1) { console.log("  Country: "+faker.address.country()) };
    if (countryCode==1) { console.log("  Country Code: "+faker.address.countryCode()) };
    if (state==1) { console.log("  State: "+faker.address.state()) };
    if (stateAbbr==1) { console.log("  StateAbbr: "+faker.address.stateAbbr()) };
    if (latitude==1) { console.log("  Latitude: "+faker.address.latitude()) };
    if (direction==1) { console.log("  Direction: "+faker.address.direction()) };
    if (cardinalDirection==1) { console.log("  Cardinal Direction: "+faker.address.cardinalDirection()) };
    if (ordinalDirection==1) { console.log("  Ordinal Direction: "+faker.address.ordinalDirection()) };
    if (nearbyGPSCoordinate==1) { console.log("  Nearby GPS Coordinate: "+faker.address.nearbyGPSCoordinate()) };
    if ((zipCode+zipCodeByState+city+cityPrefix+citySuffix+streetName+streetAddress+streetPrefix+streetSuffix+secondaryAddress+county+country+countryCode+state+stateAbbr+latitude+direction+cardinalDirection+ordinalDirection+nearbyGPSCoordinate)==0) { console.log('None') };
}

// Company
if (company==1) { 
    console.log('Company:')
    if (companyname==1) { console.log("  Company Name: "+faker.company.companyName()) };
    if (suffixes==1) { console.log("  Suffixes: "+faker.company.suffixes()) };
    if (companySuffix==1) { console.log("  Company Suffix: "+faker.company.companySuffix()) };
    if (catchPhrase==1) { console.log("  Catch Phrase: "+faker.company.catchPhrase()) };
    if (bs==1) { console.log("  bs: "+faker.company.bs()) };
    if (catchPhraseAdjective==1) { console.log("  Catch Phrase Adjective: "+faker.company.catchPhraseAdjective()) };
    if (catchPhraseDescriptor==1) { console.log("  Catch Phrase Descriptor: "+faker.company.catchPhraseDescriptor()) };
    if (catchPhraseNoun==1) { console.log("  Catch Phrase Noun: "+faker.company.catchPhraseNoun()) };
    if (bsAdjective==1) { console.log("  bs Adjective: "+faker.company.bsAdjective()) };
    if (bsBuzz==1) { console.log("  bs Buzz: "+faker.company.bsBuzz()) };
    if (bsNoun==1) { console.log("  bs Noun: "+faker.company.bsNoun()) };
    if ((companyname+suffixes+companySuffix+catchPhrase+bs+catchPhraseAdjective+catchPhraseDescriptor+catchPhraseNoun+bsAdjective+bsBuzz+bsNoun)==0) { console.log('None') };
}

// Date
var futuredate = faker.date.future();
var recentdate = faker.date.recent();
if (date==1) {
    console.log('Date:')
    if (past==1) { console.log("  Past: "+faker.date.past()) };
    if (future==1) { console.log("  Future: "+futuredate) };
    if (between==1) { console.log("  Between [Future & Recent]: "+faker.date.between(futuredate, recentdate)) };
    if (recent==1) { console.log("  Recent: "+recentdate) };
    if (soon==1) { console.log("  Soon: "+faker.date.soon()) };
    if (month==1) { console.log("  Month: "+faker.date.month()) };
    if (weekday==1) { console.log("  Weekday: "+faker.date.weekday()) };
    if ((past+future+between+recent+soon+month+weekday)==0) { console.log('None') };
}

// Finance
if (financeinfo==1) {
    console.log('Finance:')
    if (account==1) { console.log("  Account: "+faker.finance.account()) };
    if (accountName==1) { console.log("  Account Name: "+faker.finance.accountName()) };
    if (routingNumber==1) { console.log("  Routing Number: "+faker.finance.routingNumber()) };
    if (mask==1) { console.log("  Mask: "+faker.finance.mask()) };
    if (amount==1) { console.log("  Amount: "+faker.finance.amount()) };
    if (transactionType==1) { console.log("  Transaction Type: "+faker.finance.transactionType()) };
    if (currencyCode==1) { console.log("  Currency Code: "+faker.finance.currencyCode()) };
    if (currencyName==1) { console.log("  Currency Name: "+faker.finance.currencyName()) };
    if (currencySymbol==1) { console.log("  Currency Symbol: "+faker.finance.currencySymbol()) };
    if (bitcoinAddress==1) { console.log("  Bitcoin Address: "+faker.finance.bitcoinAddress()) };
    if (litecoinAddress==1) { console.log("  Litecoin Address: "+faker.finance.litecoinAddress()) };
    if (creditCardNumber==1) { console.log("  Credit Card Number: "+faker.finance.creditCardNumber()) };
    if (creditCardCVV==1) { console.log("  Credit Card CVV: "+faker.finance.creditCardCVV()) };
    if (ethereumAddress==1) { console.log("  Ethereum Address: "+faker.finance.ethereumAddress()) };
    if (iban==1) { console.log("  iban: "+faker.finance.iban()) };
    if (bic==1) { console.log("  bic: "+faker.finance.bic()) };
    if (transactionDescription==1) { console.log("  Transaction Description: "+faker.finance.transactionDescription()) };
    if ((account+accountName+routingNumber+mask+amount+transactionType+currencyCode+currencyName+currencySymbol+bitcoinAddress+litecoinAddress+creditCardNumber+creditCardCVV+ethereumAddress+iban+bic+transactionDescription)==0) { console.log('None') };
}

// Images
if (images==1) {
    console.log('Images:')
    if (imgavatar==1) { console.log("  Img Avatar: "+faker.image.avatar()) };
    if (animals==1) { console.log("  Animals: "+faker.image.animals()) };
    if (business==1) { console.log("  Business: "+faker.image.business()) };
    if ((imgavatar+animals+business)==0) { console.log('None') };
}

// Internet
if (internet==1) {
    if (avatar==1) { console.log("  Internet Avatar: "+faker.internet.avatar()) };
    if (email==1) { console.log("  Internet Avatar: "+faker.internet.email()) };
    if (userName==1) { console.log("  Internet Avatar: "+faker.internet.userName()) };
    if (password==1) { console.log("  Internet Avatar: "+faker.internet.password()) };
    if (ip==1) { console.log("  Internet Avatar: "+faker.internet.ip()) };
    if (ipv6==1) { console.log("  Internet Avatar: "+faker.internet.ipv6()) };
    if (url==1) { console.log("  Internet Avatar: "+faker.internet.url()) };
    if (mac==1) { console.log("  Mac Address: "+faker.internet.mac()) }
    if ((avatar+email+userName+password+ip+ipv6+url+mac)==0) { console.log('None') };
}

// Name
var fname=faker.name.firstName();
var lname=faker.name.lastName();
if (nameinfo==1){
    console.log('Name:')
    if (firstName==1) { console.log("  First Name: "+fname) };
    if (lastName==1) { console.log("  Last Name: "+lname) };
    if (fullName==1) { console.log(`  Full Name: ${fname} ${lname}`)}
    if (findName==1) { console.log("  Find Name: "+faker.name.findName()) };
    if (jobTitle==1) { console.log("  Job Title: "+faker.name.firstName()) };
    if (gender==1) { console.log("  Gender: "+faker.name.firstName()) };
    if (prefix==1) { console.log("  Prefix: "+faker.name.firstName()) };
    if (suffix==1) { console.log("  Suffix: "+faker.name.firstName()) };
    if (title==1) { console.log("  Title: "+faker.name.firstName()) };
    if (jobDescriptor==1) { console.log("  Job Descriptor: "+faker.name.firstName()) };
    if (jobArea==1) { console.log("  Job Area: "+faker.name.firstName()) };
    if (jobType==1) { console.log("  Job Type: "+faker.name.firstName()) };
    if ((firstName+lastName+findName+jobTitle+gender+prefix+suffix+title+jobDescriptor+jobArea+jobType)==0) { console.log('None') };
}

// Phone
if (phone==1) {
    console.log('Phone:')
    if (phoneNumber==1) { console.log("  Phone Number: "+faker.phone.phoneNumber()) };
    if (phoneNumberFormat==1) { console.log("  Phone Number:"+faker.phone.phoneNumberFormat()) };
    if (phoneFormats==1) { console.log("  Phone Number:"+faker.phone.phoneFormats()) };
    if ((phoneNumber+phoneNumberFormat+phoneFormats)==0) { console.log('None') };
}

// Time
if (time==1) {
    console.log('Time:')
    if (recent==1) { console.log("  Recent: "+faker.time.recent()) } else { console.log('None') };
}