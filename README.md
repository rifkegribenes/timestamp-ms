## Timestamp microservice (Freecodecamp Project)

### User stories:

* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

* If it does, it returns both the Unix timestamp and the natural language form of that date.

* If it does not contain a date or Unix timestamp, it returns null for those properties.

#### Example Usage:

<https://rifkegribenes-timestamp-ms.glitch.me/December15,2015>

<https://rifkegribenes-timestamp-ms.glitch.me/1450137600>

#### Example Output:

```javascript
	{
	unix: 1450117800,
	natural: "December 15, 2015"
	}
	
```

##### UI:

![timestamp-micoservice-ui] (screenshot)

#### How To Run This App Locally

Clone This Repoistory
```bash
git clone https://github.com/rifkegribenes/timestamp-ms.git
```

```bash
cd <cloned directory>
```

Install dependencies and start server
```bash
npm install
npm run dev
```