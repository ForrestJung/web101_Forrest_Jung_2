

/* const element = comments */
const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

/* let formsubmitted = () => {

    const placeForResults = document.getElementById("results")

    new URLSearchParams(window.location.search).forEach((value, name) => {
      placeForResults.append(`${name} : ${value}`)
      placeForResults.append(document.createElement("br"))
    })

} */


/* function thankYou(formsubmitted) {
    window.alert("Thank You! Your Form Has Been Submitted");
    console.log(formsubmitted);
}
 */
/* const formsubmitted = () => {

} */

/* function thankYou() {
    window.alert("Thank You! Your Form Has Been Submitted")
    console.log('Contact Form Submitted');
} */

