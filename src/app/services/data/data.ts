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
                    label: 'Demo',
                    src: 'http://...',
                    type: 'demo'
                },
                {
                    id: 1,
                    label: 'Kick',
                    src: 'http://...',
                    type: 'drum'
                },
                {
                    id: 2,
                    label: 'Synth',
                    src: 'http://...',
                    type: 'sound'
                },
                {
                    id: 3,
                    label: 'Vocal',
                    src: 'http://...',
                    type: 'vocal'
                }
            ]
        }
    ]
};
export {audio};