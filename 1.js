const biodata = () => ({
    name: "Arief Setiawan",
    age: 19,
    address:
        "Jln. Baru Bakti Desa Moro , Kec. Sekaran, Kota Lamongan, Jawa Timur",
    hobbies: ["coding", "membaca", "gaming"],
    is_married: false,
    list_school: [
        {
            name: "SD Negeri 01 Moro",
            year_in: 2007,
            year_out: 2013,
            major: null
        },
        {
            name: "SMP Negeri 01 Maduran",
            year_in: 2013,
            year_out: 2016,
            major: null
        },
        {
            name: "SMA Negeri 1 Sekaran",
            year_in: 2016,
            year_out: 2019,
            major: "IPA"
        },
        
    ],
    skills: [
        {
            name: "HTML",
            level: "Advanced"
        },
        {
            name: "CSS",
            level: "Advanced"
        },
        {
            name: "Javascript",
            level: "Beginner"
        }
    ],
    interest_in_coding: true
});

console.log(biodata());