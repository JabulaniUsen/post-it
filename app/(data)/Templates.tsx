export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2799/2799991.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points based on the given niche & outline topic, and provide the result in Rich Text Editor format.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Post Generator',
        desc: 'An AI tool that generates blog posts based on the provided outline and niche.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'Generate a detailed blog post in Rich Text Editor format based on the given niche & outline, with appropriate headings, subheadings, and paragraphs.',
        slug: 'generate-blog-post',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'YouTube Video SEO',
        desc: 'An AI tool that generates an SEO-optimized title and video description.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/2703/2703920.png',
        aiPrompt: 'Generate an SEO-optimized YouTube video title and a compelling video description based on the given video topic.',
        slug: 'generate-youtube-seo',
        form: [
            {
                label: 'Enter video topic',
                field: 'input',
                name: 'videoTopic',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Hashtags',
        desc: 'An AI tool that generates relevant hashtags for Instagram posts.',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/3437/3437343.png',
        aiPrompt: 'Generate 20 highly relevant Instagram hashtags based on the provided content description.',
        slug: 'generate-instagram-hashtags',
        form: [
            {
                label: 'Enter content description',
                field: 'textarea',
                name: 'contentDescription',
                required: true
            }
        ]
    },
    {
        name: 'TikTok Hashtags',
        desc: 'An AI tool that generates relevant hashtags for TikTok videos.',
        category: 'TikTok',
        icon: 'https://cdn-icons-png.flaticon.com/128/3046/3046127.png',
        aiPrompt: 'Generate 20 trending TikTok hashtags based on the provided video description.',
        slug: 'generate-tiktok-hashtags',
        form: [
            {
                label: 'Enter video description',
                field: 'textarea',
                name: 'videoDescription',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Video Content Ideas',
        desc: 'An AI tool that generates content ideas for Instagram videos.',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/4959/4959339.png',
        aiPrompt: 'Give me 5 creative Instagram video content ideas based on the provided niche and theme.',
        slug: 'generate-instagram-video-ideas',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter theme or idea',
                field: 'textarea',
                name: 'theme',
            }
        ]
    },
    {
        name: 'TikTok Content Ideas',
        desc: 'An AI tool that generates content ideas for TikTok videos.',
        category: 'TikTok',
        icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504942.png',
        aiPrompt: 'Give me 5 creative TikTok video content ideas based on the provided niche and trend.',
        slug: 'generate-tiktok-content-ideas',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter trend or theme',
                field: 'textarea',
                name: 'trend',
            }
        ]
    },
    {
        name: 'Twitter Content Ideas',
        desc: 'An AI tool that generates content ideas for Twitter.',
        category: 'Twitter',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968830.png',
        aiPrompt: 'Generate 5 engaging Twitter content ideas based on the given topic and audience.',
        slug: 'generate-twitter-content-ideas',
        form: [
            {
                label: 'Enter topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Twitter Content Generator',
        desc: 'An AI tool that generates Twitter posts based on the provided idea.',
        category: 'Twitter',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968958.png',
        aiPrompt: 'Generate a Twitter post with appropriate hashtags based on the given idea and tone (e.g., professional, casual).',
        slug: 'generate-twitter-post',
        form: [
            {
                label: 'Enter content idea',
                field: 'textarea',
                name: 'contentIdea',
                required: true
            },
            {
                label: 'Enter tone (e.g., professional, casual)',
                field: 'input',
                name: 'tone',
            }
        ]
    },
    {
        name: 'Facebook Content Ideas',
        desc: 'An AI tool that generates content ideas for Facebook posts.',
        category: 'Facebook',
        icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504903.pnghttps://cdn-icons-png.flaticon.com/128/2504/2504903.png',
        aiPrompt: 'Give me 5 engaging Facebook content ideas based on the provided niche and target audience.',
        slug: 'generate-facebook-content-ideas',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    },
    {
        name: 'Facebook Content Generator',
        desc: 'An AI tool that generates Facebook posts based on the provided idea and audience.',
        category: 'Facebook',
        icon: 'https://cdn-icons-png.flaticon.com/128/3670/3670124.png',
        aiPrompt: 'Generate a Facebook post with appropriate call-to-action based on the given idea and audience.',
        slug: 'generate-facebook-post',
        form: [
            {
                label: 'Enter content idea',
                field: 'textarea',
                name: 'contentIdea',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
            }
        ]
    }
];
