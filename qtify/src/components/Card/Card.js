import React from "react";
import './Card.css';
import { Chip } from '@mui/material';


let data = 
[{
    id: "e9bdd076-cffa-4dfd-a618-a0cea69e4e96",
    title: "Optimal Climate",
    description: "Ut quidem nesciunt perferendis quis.",
    follows: 14589,
    image: "https://images.pexels.com/photos/235795/pexels-photo-235795.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    slug: "optimal-climate",
    songs: [
    {
    id: "a994c8e7-42ca-4081-a22a-cbc23b67550a",
    title: "Because I Love You (The Postman Song)",
    artists: [
    "Mr. Monica Moen"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 87426,
    image: "https://images.pexels.com/photos/925263/pexels-photo-925263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 24677
    },
    {
    id: "7c2464e6-17d2-475c-b9e7-0338d930cf1b",
    title: "You're Still the One",
    artists: [
    "Jodi Dooley",
    "Courtney Huel",
    "Jody Hegmann"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 55395,
    image: "https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 27240
    },
    {
    id: "4feb8054-84e7-4cea-b1a1-2b22df2c54ad",
    title: "Raindrops Keep Falling On My Head",
    artists: [
    "Colin Hayes",
    "Bennie D'Amore PhD"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 30868,
    image: "https://images.pexels.com/photos/442580/pexels-photo-442580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 38548
    },
    {
    id: "1c2f54f8-817d-484f-ae30-83e27e5928a3",
    title: "I Wanna Love You",
    artists: [
    "Isaac Glover"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 32893,
    image: "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 54341
    },
    {
    id: "df687f04-b8dd-44b6-8f16-bd80a6cdbc85",
    title: "1999",
    artists: [
    "Kelly Durgan",
    "Michael Klocko",
    "Alberto Ratke"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 65542,
    image: "https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 40164
    },
    {
    id: "d14be93a-00f2-4f2e-b48c-b337f85410c9",
    title: "Big Bad John",
    artists: [
    "Jodi Kiehn II",
    "Emma Thiel",
    "Tracy Quigley"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 85343,
    image: "https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 50920
    },
    {
    id: "fe57bc0f-d5e5-4934-b6dc-d3a2088f2835",
    title: "Lonely Boy",
    artists: [
    "Ed Bergstrom",
    "Eric Sipes"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 26021,
    image: "https://images.pexels.com/photos/1632788/pexels-photo-1632788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 31187
    },
    {
    id: "4c645d10-916e-47c8-b2b0-4e8a5d5cb437",
    title: "Freebird",
    artists: [
    "Marcos Quitzon",
    "Ellis Dickinson",
    "Yvonne Kuphal"
    ],
    genre: {
    key: "pop",
    label: "Pop"
    },
    likes: 56882,
    image: "https://images.pexels.com/photos/15501640/pexels-photo-15501640.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 31125
    },
    {
    id: "eb55db6f-2515-4041-8f2a-1c4dd4f9fbd4",
    title: "Hips don't lie",
    artists: [
    "Ervin Olson",
    "Jonathan Schiller"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 54057,
    image: "https://images.pexels.com/photos/4406759/pexels-photo-4406759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 33386
    },
    {
    id: "b30082fd-a3f1-4466-975d-2c69d72440d8",
    title: "Firework",
    artists: [
    "Miss Rachel Veum III"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 87324,
    image: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 52019
    },
    {
    id: "6f0bf4fc-ea9a-4155-9d02-8309d9d534aa",
    title: "Down",
    artists: [
    "Whitney Stokes",
    "Jenny Hoeger",
    "Gretchen Luettgen PhD"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 67362,
    image: "https://images.pexels.com/photos/2440300/pexels-photo-2440300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 51592
    },
    {
    id: "60e539df-989c-49a7-b9d2-215a8a6fb79c",
    title: "Brother Louie",
    artists: [
    "Lee Frami V"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 86886,
    image: "https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 54499
    },
    {
    id: "c3ceea90-ae34-400e-8063-e10858faa646",
    title: "I Want to Know What Love Is",
    artists: [
    "Roy Reichel",
    "Jonathan Bins MD",
    "Debbie Gusikowski"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 33483,
    image: "https://images.pexels.com/photos/24924/pexels-photo-24924.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 42334
    },
    {
    id: "703f2fd5-c841-4926-a0d5-5c5c3ed8e0d4",
    title: "Everybody Loves Somebody",
    artists: [
    "Julia Kohler"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 75551,
    image: "https://images.pexels.com/photos/134643/pexels-photo-134643.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 32893
    },
    {
    id: "13a4efc4-80c9-4178-82f2-4d415b290d21",
    title: "Brandy (You're A Fine Girl)",
    artists: [
    "Roger Bogan IV"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 95945,
    image: "https://images.pexels.com/photos/1414535/pexels-photo-1414535.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 31895
    },
    {
    id: "7e68ac7c-2279-4db4-a16c-5d9cd9f6fffc",
    title: "You Make Me Feel Like Dancing",
    artists: [
    "Kenny Hilpert"
    ],
    genre: {
    key: "pop",
    label: "Pop"
    },
    likes: 65914,
    image: "https://images.pexels.com/photos/2246950/pexels-photo-2246950.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 29630
    },
    {
    id: "15992dd6-172f-4ca5-889d-59b0ed54c430",
    title: "Smooth",
    artists: [
    "Jeanette Wintheiser II",
    "Vicki Ledner"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 86357,
    image: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 45199
    },
    {
    id: "3ea73df4-54a8-4ccf-b385-7536ba06d039",
    title: "I Can't Get Next to You",
    artists: [
    "Miss Misty Kautzer"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 70673,
    image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 30005
    },
    {
    id: "119a2db9-bb34-48b8-9625-e80a3bb7ed04",
    title: "Unchained Melody",
    artists: [
    "Rick Erdman Jr.",
    "Dixie Nolan"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 25791,
    image: "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 34639
    },
    {
    id: "23ba8f02-c6e8-4014-ad91-62808346904c",
    title: "Bad Moon Rising",
    artists: [
    "Mrs. Jeremiah Bruen Sr."
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 80077,
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 55011
    },
    {
    id: "c863b1d4-ece9-4bd2-81a5-a27f18311367",
    title: "Wannabe",
    artists: [
    "Rickey Powlowski",
    "Sara Russel"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 86320,
    image: "https://images.pexels.com/photos/3618362/pexels-photo-3618362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 54887
    },
    {
    id: "c863b1d4-ece9-4bd2-81a5-a27f18311367",
    title: "Wannabe",
    artists: [
    "Rickey Powlowski",
    "Sara Russel"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 86320,
    image: "https://images.pexels.com/photos/3618362/pexels-photo-3618362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 54887
    },
    {
    id: "22a14919-80d6-4188-a81e-a3e47564e7fa",
    title: "I Kissed A Girl",
    artists: [
    "Lela Rice",
    "Melody Berge"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 43265,
    image: "https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 56915
    },
    {
    id: "32c0f0ac-0e18-45bb-9d84-fa453dbe6b8c",
    title: "West End Girls",
    artists: [
    "Charlotte Harris"
    ],
    genre: {
    key: "pop",
    label: "Pop"
    },
    likes: 61863,
    image: "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 33806
    },
    {
    id: "f912994d-0702-43f6-be6b-dee37f9a0c82",
    title: "(They Long to Be) Close to You",
    artists: [
    "Leonard Frami"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 60887,
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 48536
    },
    {
    id: "e8b7e73c-cc76-4f87-bbaf-d3ddda4bb4c3",
    title: "Some Enchanted Evening",
    artists: [
    "Ernest Mertz V",
    "Kenneth Yundt",
    "Bethany Hudson"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 42125,
    image: "https://images.pexels.com/photos/4087996/pexels-photo-4087996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 53471
    },
    {
    id: "c8f3db93-85a0-494b-b5e9-a32a96e0595a",
    title: "Get Down Tonight",
    artists: [
    "Gene Heathcote",
    "Elijah Gislason"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 29586,
    image: "https://images.pexels.com/photos/364086/pexels-photo-364086.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 38876
    },
    {
    id: "56e1ed6f-e5e1-49de-b87e-daf2ceac6511",
    title: "Baby Got Back",
    artists: [
    "Cornelius Upton",
    "Jody Beahan",
    "Devin Hamill"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 12196,
    image: "https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 59193
    },
    {
    id: "d214d9a7-cc9f-4f4a-9835-08adc2fc1510",
    title: "Hey Paula",
    artists: [
    "Archie Walsh",
    "Miranda Schulist",
    "Dennis Swift"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 29392,
    image: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 27706
    },
    {
    id: "33d06540-e006-4bfc-a960-14d379e245fc",
    title: "White Christmas",
    artists: [
    "Marlene Dare",
    "Nelson Blick"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 21509,
    image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 30992
    },
    {
    id: "8a8c8dc8-f501-4abe-bd46-e0d357d3e509",
    title: "Prisoner of Love",
    artists: [
    "Mrs. Shaun Toy",
    "Hilda Steuber IV",
    "Deborah Abbott"
    ],
    genre: {
    key: "pop",
    label: "Pop"
    },
    likes: 24205,
    image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 37093
    },
    {
    id: "c8f3db93-85a0-494b-b5e9-a32a96e0595a",
    title: "Get Down Tonight",
    artists: [
    "Gene Heathcote",
    "Elijah Gislason"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 29586,
    image: "https://images.pexels.com/photos/364086/pexels-photo-364086.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 38876
    },
    {
    id: "339abcfd-8d66-40eb-8380-6236b7d5258e",
    title: "Theme From 'Greatest American Hero' (Believe It Or Not)",
    artists: [
    "Ricky Konopelski"
    ],
    genre: {
    key: "pop",
    label: "Pop"
    },
    likes: 84855,
    image: "https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 44569
    },
    {
    id: "175a3e5f-9b30-4a2f-8869-6bd998788955",
    title: "Rock Around the Clock",
    artists: [
    "Mrs. Desiree Davis",
    "Mattie Parker"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 13306,
    image: "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 50042
    },
    {
    id: "d34c0396-f4f1-4d96-aa78-b061d7f9e257",
    title: "Chain of Fools",
    artists: [
    "Gary Shields",
    "Benny Yost",
    "Kelvin Renner"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 85719,
    image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 50745
    },
    {
    id: "2d21189f-ba4a-408c-81ed-35abcbda10bd",
    title: "La Bamba",
    artists: [
    "Horace McDermott",
    "Erin Leannon",
    "Samuel Stehr"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 86061,
    image: "https://images.pexels.com/photos/2879991/pexels-photo-2879991.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 34314
    },
    {
    id: "de52ea65-ab80-4734-8173-3341c9a451ed",
    title: "You're the One That I Want",
    artists: [
    "Ms. Mattie Klein"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 75600,
    image: "https://images.pexels.com/photos/1010518/pexels-photo-1010518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 47778
    },
    {
    id: "d6d14a7a-5de3-4a5b-be18-4434530f3535",
    title: "Somebody to Love",
    artists: [
    "Alfonso Balistreri",
    "Dr. Jay Kutch",
    "Kyle Towne"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 78504,
    image: "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 28581
    },
    {
    id: "75e3bd5a-5f23-42a8-99e7-839e20ca9f58",
    title: "Lookin' Out My Back Door",
    artists: [
    "Mr. Jill Hansen",
    "Emmett Block",
    "Rosemarie Bosco"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 62866,
    image: "https://images.pexels.com/photos/1886641/pexels-photo-1886641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 49892
    },
    {
    id: "bc941d3f-27a5-4704-9795-d72f54c54f47",
    title: "Sailing",
    artists: [
    "Rufus Witting Sr.",
    "Phillip Rutherford Jr.",
    "Delbert Yost"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 91129,
    image: "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 41424
    },
    {
    id: "ecbb0f01-26af-406a-9054-b72989053e8b",
    title: "We Didn't Start the Fire",
    artists: [
    "Ms. Erick Upton",
    "David Zboncak",
    "Joanne Medhurst"
    ],
    genre: {
    key: "pop",
    label: "Pop"
    },
    likes: 64490,
    image: "https://images.pexels.com/photos/4315839/pexels-photo-4315839.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 34818
    },
    {
    id: "175a3e5f-9b30-4a2f-8869-6bd998788955",
    title: "Rock Around the Clock",
    artists: [
    "Mrs. Desiree Davis",
    "Mattie Parker"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 13306,
    image: "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 50042
    },
    {
    id: "85afdc4d-1861-40d1-b7f7-319f01077a10",
    title: "I Want to Hold Your Hand",
    artists: [
    "Lorraine Pfeffer",
    "Samantha Hegmann",
    "Genevieve Bernier"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 68428,
    image: "https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 47707
    },
    {
    id: "b939134e-c46d-4884-9af5-e650aa3d77be",
    title: "Chattanoogie Shoe-Shine Boy",
    artists: [
    "Allan Lueilwitz"
    ],
    genre: {
    key: "pop",
    label: "Pop"
    },
    likes: 98669,
    image: "https://images.pexels.com/photos/92083/pexels-photo-92083.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 35053
    },
    {
    id: "23ba8f02-c6e8-4014-ad91-62808346904c",
    title: "Bad Moon Rising",
    artists: [
    "Mrs. Jeremiah Bruen Sr."
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 80077,
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 55011
    },
    {
    id: "4e1590dd-7622-4cd0-a3b5-306cf564c9f5",
    title: "Love Is Blue (L'Amour Est Bleu)",
    artists: [
    "Patrick Balistreri MD",
    "Mr. Kurt Walsh"
    ],
    genre: {
    key: "blues",
    label: "Blues"
    },
    likes: 72955,
    image: "https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 40331
    },
    {
    id: "7a7a899f-88ce-4740-8a17-208c67e8121a",
    title: "My Guy",
    artists: [
    "Grace Mueller"
    ],
    genre: {
    key: "jazz",
    label: "Jazz"
    },
    likes: 92533,
    image: "https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 27652
    },
    {
    id: "668a71bf-506b-49df-959d-1ef71a3e7b76",
    title: "Tears in Heaven",
    artists: [
    "Linda Schroeder",
    "Luke Kuphal"
    ],
    genre: {
    key: "rock",
    label: "Rock"
    },
    likes: 18650,
    image: "https://images.pexels.com/photos/3961942/pexels-photo-3961942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    durationInMs: 41278
    }
    ]
    },]

export default function Card(cardele){
// console.log(cardele)
  

    return(
        <div className="x" style={{width:'159px'}}>
        <div className="card">
           
                <img className="card-img-top" src={cardele.cardele.image} alt="dd" height="170px"  width="159px"/>
{/* {console.log(cardele.cardele.image,"-------")} */}
           
        <div className="card-body text-left">
        <Chip label={`${cardele.cardele.follows} Follows` } variant="outlined" className="badges" />
            </div>

        </div>

        <p className="card-title text-white"> {cardele.cardele.title} </p>
        </div>

    )
}