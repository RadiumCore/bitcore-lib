# Radium URIs
Represents a radium payment URI. radium URI strings became the most popular way to share payment request, sometimes as a radium link and others using a QR code.

URI Examples:

```
radium:Xfbvwaeo44H8nwTvSYh3NW8inZgbuPyhdf
radium:Xfbvwaeo44H8nwTvSYh3NW8inZgbuPyhdf?amount=1.2
radium:Xfbvwaeo44H8nwTvSYh3NW8inZgbuPyhdf?amount=1.2&message=Payment&label=Satoshi&extra=other-param
```

## URI Validation
The main use that we expect you'll have for the `URI` class in radium is validating and parsing radium URIs. A `URI` instance exposes the address as a radium `Address` object and the amount in Satoshis, if present.

The code for validating URIs looks like this:

```javascript
var uriString = 'radium:Xfbvwaeo44H8nwTvSYh3NW8inZgbuPyhdf?amount=1.2';
var valid = URI.isValid(uriString);
var uri = new URI(uriString);
console.log(uri.address.network, uri.amount); // 'livenet', 120000000
```

## URI Parameters
All standard parameters can be found as members of the `URI` instance. However a radium URI may contain other non-standard parameters, all those can be found under the `extra` namespace.

See [the official BIP21 spec](https://github.com/radium/bips/blob/master/bip-0021.mediawiki) for more information.

## Create URI
Another important use case for the `URI` class is creating a radium URI for sharing a payment request. That can be accomplished by using a dictionary to create an instance of URI.

The code for creating an URI from an Object looks like this:

```javascript
var uriString = new URI({
  address: 'Xfbvwaeo44H8nwTvSYh3NW8inZgbuPyhdf',
  amount : 10000, // in satoshis
  message: 'My payment request'
});
var uriString = uri.toString();
```
