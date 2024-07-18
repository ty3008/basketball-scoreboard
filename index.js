let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');

function increaseHomeScoreOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function increaseGuestScoreOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}
