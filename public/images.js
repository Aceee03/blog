// SCRIPT FOR AUTOMATIC UPLOAD (soon to be added feature)
// 
// function extractDateFromImageUrl(imageUrl) {
//    // Regular expression to match the date format (YYYY-MM-DD)
//    const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;

//    // Extract the matched groups from the URL
//    const match = imageUrl.match(dateRegex);

//    // Check if a match was found
//    if (match) {
//       // Extract year, month, and day from the matched groups
//       const year = match[1];
//       const month = match[2];
//       const day = match[3];

//       // Format the date as desired (e.g., "MMM D YYYY")
//       const formattedDate = new Date(year, month - 1, day).toLocaleDateString("en-US", {
//          month: "short",
//          day: "numeric",
//          year: "numeric",
//          });

//          return formattedDate; // Return the formatted date string
//    } else {
//       // Return an error message if no date is found
//       return "No date found in the image URL";
//       }
//       }

//       export const newImageData = imageData.forEach((image) => {
//          const extractedData = extractDateFromImageUrl(image.src)
//          image.extractedDate = extractedData
//       })

export const imageData = [
   { src: 'https://i.ibb.co/qxrrrpq/2023-07-03-17-27-IMG-6559.jpg', location: 'La Grande Plage, Skikda', date: 'Jul 3 2023' },
   { src: 'https://i.ibb.co/JRmqfHr/2023-07-31-14-04-IMG-7575.jpg', location: 'Zenith, Constantine', date: 'Jul 31 2023' },
   { src: 'https://i.ibb.co/Cw1hyw6/2023-08-07-19-29-IMG-7783.jpg', location: 'Jeanne d\'Arc, Skikda', date: 'Aug 7 2023' },
   { src: 'https://i.ibb.co/n0jRD1D/2023-09-01-02-47-IMG-8171.jpg', location: 'La Grande Plage, Skikda', date: 'Sep 1 2023' },
   { src: 'https://i.ibb.co/GJPhx4F/2023-11-10-17-43-IMG-8924.jpg', location: 'Amizour, Bejaia', date: 'Nov 10 2023' },
   { src: 'https://i.ibb.co/JmVBJ3h/2023-12-26-15-35-IMG-9767.jpg', location: 'Cathedral of St Vincent de Paul, Tunis', date: 'Dec 26 2023' },
   { src: 'https://i.ibb.co/k51B033/2023-12-27-16-45-IMG-9779.jpg', location: 'Al-Zaytuna Mosque, Tunis', date: 'Dec 27 2023' },
   { src: 'https://i.ibb.co/F7kYRWv/2023-12-29-12-08-IMG-9828.jpg', location: 'Tabarka, Tunisia', date: 'Dec 29 2023' },
   { src: 'https://i.ibb.co/F7dcx5R/2024-01-26-20-24-IMG-0225.jpg', location: 'Skikda Port', date: 'Jan 26 2024' },
   { src: 'https://i.ibb.co/Y8GMJb2/2024-02-17-13-33-IMG-0441.jpg', location: 'Amizour, Bejaia', date: 'Feb 17 2024' },
   { src: 'https://i.ibb.co/KbyZVVG/2024-02-23-21-44-IMG-0502.jpg', location: 'Algiers, Algeria', date: 'Feb 23 2024' },
   { src: 'https://i.ibb.co/9gbBx2b/2024-02-24-13-13-IMG-0507.jpg', location: 'Casbah of Algiers', date: 'Feb 24 2024' },
   { src: 'https://i.ibb.co/KwkBSxX/2024-02-24-15-14-IMG-0517.jpg', location: 'Algiers', date: 'Feb 24 2024' },
   { src: 'https://i.ibb.co/2YZFkZ0/2024-02-24-16-19-IMG-0524.jpg', location: '"Aerial" view of Algiers', date: 'Feb 24 2024' },
   { src: 'https://i.ibb.co/6gvP9Q5/2024-02-24-17-07-IMG-0538.jpg', location: 'Telemly, Algiers', date: 'Feb 24 2024' },
   { src: 'https://i.ibb.co/Ss7FFfj/2024-03-15-00-34-IMG-0694.jpg', location: 'Elden Ring - Defeating Rykard, the lord of Blasphemy', date: 'Mar 15 2024' },
   { src: 'https://i.ibb.co/NjdfRq7/2024-04-21-19-23-IMG-1127.jpg', location: 'Amizour, Bejaia', date: 'Apr 21 2024' },
   { src: 'https://i.ibb.co/n07zKkg/2024-04-24-09-57-IMG-1141.jpg', location: 'ESTIN', date: 'Apr 24 2024' },
];




export const firstRowImages = imageData.filter((image, index) => index % 3 === 0);
export const secondRowImages = imageData.filter((image, index) => index % 3 === 1);
export const thirdRowImages = imageData.filter((image, index) => index % 3 === 2)