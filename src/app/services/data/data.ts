const audio = {
    plugins: [
        {
            id: 0,
            files: [
                {
                    id: 0,
                    label: 'Voice 1',
                    src: 'http://...',
                    wet: false
                },
                {
                    id: 1,
                    label: 'Voice 1',
                    src: 'http://...',
                    wet: true
                }
            ]
        }
    ],
    samples: [
        {
            id: 0,
            files: [
                {
                    id: 0,
                    label: 'Kbr-Twentii',
                    src: 'gs://kbrhz-db.appspot.com/samples/KBR - Twenty.zip',
                    type: 'library',
                    description: "Kbr-Twentii es una colección de samples de perfil experimental. Son más de 70 archivos de audio con variedad de Drums, Melodías, Bajos, Vocales y otros elementos originales. Usalo para inspirarte o para dar variedad a tus beats.",
                    image: '../../../assets/samples/kbr-twentii.png'
                },
                {
                    id: 1,
                    label: 'Kick',
                    src: 'http://...',
                    type: 'drum',
                    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    image: '../../../assets/samples/sample_holder.jpg'
                },
                {
                    id: 2,
                    label: 'Synth',
                    src: 'http://...',
                    type: 'sound',
                    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    image: '../../../assets/samples/sample_holder.jpg'
                },
                {
                    id: 3,
                    label: 'Vocal',
                    src: 'http://...',
                    type: 'vocal',
                    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    image: '../../../assets/samples/sample_holder.jpg'
                }
            ]
        }
    ]
};
export {audio};