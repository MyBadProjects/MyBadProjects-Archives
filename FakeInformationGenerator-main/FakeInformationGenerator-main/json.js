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
console.log('{')
if (address==1) {
    if (zipCode==1) { console.log('  "Zipcode": "'+faker.address.zipCode()+'"') };
    if (zipCodeByState==1) { console.log('  Zipcode by Stake: '+faker.address.zipCodeByState()+'"') };
    if (city==1) { console.log('  "City": '+faker.address.city()+'"') };
    if (cityPrefix==1) { console.log('  "CityPrefix": "'+faker.address.cityPrefix()+'"') };
    if (citySuffix==1) { console.log('  "CitySuffix": "'+faker.address.citySuffix()+'"') };
    if (streetName==1) { console.log('  "StreetName": "'+faker.address.streetName()+'"') };
    if (streetAddress==1) { console.log('  "StreetAddress": "'+faker.address.streetAddress()+'"') };
    if (streetSuffix==1) { console.log('  "StreetSuffix": "'+faker.address.streetSuffix()+'"') };
    if (streetPrefix==1) { console.log('  "StreetPrefix": "'+faker.address.streetPrefix()+'"') };
    if (secondaryAddress==1) { console.log('  "SecondaryAddress": "'+faker.address.secondaryAddress()+'"') };
    if (county==1) { console.log('  "County": "'+faker.address.county()+'"') };
    if (country==1) { console.log('  "Country": "'+faker.address.country()+'"') };
    if (countryCode==1) { console.log('  "CountryCode": "'+faker.address.countryCode()+'"') };
    if (state==1) { console.log('  "State": "'+faker.address.state()+'"') };
    if (stateAbbr==1) { console.log('  "StateAbbr": "'+faker.address.stateAbbr()+'"') };
    if (latitude==1) { console.log('  "Latitude": "'+faker.address.latitude()+'"') };
    if (direction==1) { console.log('  "Direction": "'+faker.address.direction()+'"') };
    if (cardinalDirection==1) { console.log('  "CardinalDirection": "'+faker.address.cardinalDirection()+'"') };
    if (ordinalDirection==1) { console.log('  "OrdinalDirection": "'+faker.address.ordinalDirection()+'"') };
    if (nearbyGPSCoordinate==1) { console.log('  "NearbyGPSCoordinate": "'+faker.address.nearbyGPSCoordinate()+'"') };
}

// Company
if (company==1) {
    if (companyname==1) { console.log('  "CompanyName": '+faker.company.companyName()+'"') };
    if (suffixes==1) { console.log('  "Suffixes": '+faker.company.suffixes()+'"') };
    if (companySuffix==1) { console.log('  "CompanySuffix": '+faker.company.companySuffix()+'"') };
    if (catchPhrase==1) { console.log('  CatchPhrase": '+faker.company.catchPhrase()+'"') };
    if (bs==1) { console.log('  bs: '+faker.company.bs()+'"') };
    if (catchPhraseAdjective==1) { console.log('  "CatchPhraseAdjective": "'+faker.company.catchPhraseAdjective()+'"') };
    if (catchPhraseDescriptor==1) { console.log('  "CatchPhraseDescriptor": "'+faker.company.catchPhraseDescriptor()+'"') };
    if (catchPhraseNoun==1) { console.log('  "CatchPhraseNoun": "'+faker.company.catchPhraseNoun()+'"') };
    if (bsAdjective==1) { console.log('  "bsAdjective": "'+faker.company.bsAdjective()+'"') };
    if (bsBuzz==1) { console.log('  "bsBuzz": "'+faker.company.bsBuzz()+'"') };
    if (bsNoun==1) { console.log('  "bsNoun": "'+faker.company.bsNoun()+'"') };
}

// Date
var futuredate = faker.date.future();
var recentdate = faker.date.recent();
if (date==1) {
    if (past==1) { console.log('  "Past": "'+faker.date.past()+'"') };
    if (future==1) { console.log('  "Future": "'+futuredate) };
    if (between==1) { console.log('  "Between": "'+faker.date.between(futuredate, recentdate)) };
    if (recent==1) { console.log('  "Recent": '+recentdate) };
    if (soon==1) { console.log('  "Soon": "'+faker.date.soon()+'"') };
    if (month==1) { console.log('  "Month": "'+faker.date.month()+'"') };
    if (weekday==1) { console.log('  "Weekday": "'+faker.date.weekday()+'"') };
}

// Finance
if (financeinfo==1) {
    if (account==1) { console.log('  "Account": "'+faker.finance.account()+'"') };
    if (accountName==1) { console.log('  "AccountName": "'+faker.finance.accountName()+'"') };
    if (routingNumber==1) { console.log('  "RoutingNumber": "'+faker.finance.routingNumber()+'"') };
    if (mask==1) { console.log('  "Mask": "'+faker.finance.mask()+'"') };
    if (amount==1) { console.log('  "Amount": "'+faker.finance.amount()+'"') };
    if (transactionType==1) { console.log('  "TransactionType": "'+faker.finance.transactionType()+'"') };
    if (currencyCode==1) { console.log('  "CurrencyCode": "'+faker.finance.currencyCode()+'"') };
    if (currencyName==1) { console.log('  "CurrencyName": "'+faker.finance.currencyName()+'"') };
    if (currencySymbol==1) { console.log('  "CurrencySymbol": "'+faker.finance.currencySymbol()+'"') };
    if (bitcoinAddress==1) { console.log('  "BitcoinAddress": "'+faker.finance.bitcoinAddress()+'"') };
    if (litecoinAddress==1) { console.log('  "LitecoinAddress": "'+faker.finance.litecoinAddress()+'"') };
    if (creditCardNumber==1) { console.log('  "CreditCardNumber": "'+faker.finance.creditCardNumber()+'"') };
    if (creditCardCVV==1) { console.log('  "CreditCardCVV": "'+faker.finance.creditCardCVV()+'"') };
    if (ethereumAddress==1) { console.log('  "EthereumAddress": "'+faker.finance.ethereumAddress()+'"') };
    if (iban==1) { console.log('  "iban": "'+faker.finance.iban()+'"') };
    if (bic==1) { console.log('  "bic": "'+faker.finance.bic()+'"') };
    if (transactionDescription==1) { console.log('  "TransactionDescription": "'+faker.finance.transactionDescription()+'"') };
}

// Images
if (images==1) {
    if (imgavatar==1) { console.log('  "ImgAvatar": '+faker.image.avatar()+'"') };
    if (animals==1) { console.log('  "Animals": "'+faker.image.animals()+'"') };
    if (business==1) { console.log('  "Business": "'+faker.image.business()+'"') };
}

// Internet
if (internet==1) {
    if (avatar==1) { console.log('  "InternetAvatar": "'+faker.internet.avatar()+'"') };
    if (email==1) { console.log('  "Email": "'+faker.internet.email()+'"') };
    if (userName==1) { console.log('  "Username": "'+faker.internet.userName()+'"') };
    if (password==1) { console.log('  "Password": "'+faker.internet.password()+'"') };
    if (ip==1) { console.log('  "IP": "'+faker.internet.ip()+'"') };
    if (ipv6==1) { console.log('  "IPV6": "'+faker.internet.ipv6()+'"') };
    if (url==1) { console.log('  "URL": "'+faker.internet.url()+'"') };
    if (mac==1) { console.log('  "MacAddress": "'+faker.internet.mac()+'"') }
}

// Name
var fname=faker.name.firstName();
var lname=faker.name.lastName();
if (nameinfo==1){
    if (firstName==1) { console.log('  "FirstName": "'+fname+'"') };
    if (lastName==1) { console.log('  "LastName": "'+lname+'"') };
    if (fullName==1) { console.log(`  "FullName": "${fname} ${lname}"`)}
    if (findName==1) { console.log('  "FindName": "'+faker.name.findName()+'"') };
    if (jobTitle==1) { console.log('  JobTitle: "'+faker.name.firstName()+'"') };
    if (gender==1) { console.log('  "Gender": "'+faker.name.firstName()+'"') };
    if (prefix==1) { console.log('  "Prefix": "'+faker.name.firstName()+'"') };
    if (suffix==1) { console.log('  "Suffix": "'+faker.name.firstName()+'"') };
    if (title==1) { console.log('  "Title": "'+faker.name.firstName()+'"') };
    if (jobDescriptor==1) { console.log('  "JobDescriptor": "'+faker.name.firstName()+'"') };
    if (jobArea==1) { console.log('  "JobArea": "'+faker.name.firstName()+'"') };
    if (jobType==1) { console.log('  "JobType": "'+faker.name.firstName()+'"') };
}

// Phone
if (phone==1) {
    if (phoneNumber==1) { console.log('  "PhoneNumber": "'+faker.phone.phoneNumber()+'"') };
    if (phoneNumberFormat==1) { console.log('  "PhoneNumberFormat": "'+faker.phone.phoneNumberFormat()+'"') };
    if (phoneFormats==1) { console.log('  "PhoneFormats": "'+faker.phone.phoneFormats()+'"') };
}

// Time
if (time==1) {
    if (recent==1) { console.log('  "Recent": "'+faker.time.recent()+'"') }
}

console.log(`  "Localization": ${localization}`)
console.log(`  "Seed": ${seed}`)

console.log('}')