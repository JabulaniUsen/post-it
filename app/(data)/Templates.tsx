export default [
    {
        name: 'Ask me anything',
        desc: 'An AI tool that answers any questions you have.',
        category: 'Utility',
        icon: "https://cdn-icons-png.flaticon.com/128/17621/17621308.png",
        aiPrompt: 'Answer the following question based on the best available knowledge and make your answers as detailed as you can:',
        slug: 'generate-question-answer',
        form: [
            {
                label: 'Enter your question',
                field: 'textarea',
                name: 'question',
                required: true
            }
        ]
    },
    {
        name: 'Blog Post Generator',
        desc: 'An AI tool that generates blog posts based on the provided outline and niche.',
        category: 'Blog',
        icon: "https://cdn-icons-png.flaticon.com/128/3131/3131611.png" ,
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
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information.',
        category: 'Blog',
        icon: "https://cdn-icons-png.flaticon.com/128/2800/2800015.png",
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
        name: 'Facebook Content Generator',
        desc: 'An AI tool that generates Facebook posts based on the provided idea and audience.',
        category: 'Facebook',
        icon: "https://cdn-icons-png.flaticon.com/128/13808/13808957.png",
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
                name: 'audience'
            }
        ]
    },
    {
        name: 'Facebook Content Ideas',
        desc: 'An AI tool that generates content ideas for Facebook posts.',
        category: 'Facebook',
        icon: "https://cdn-icons-png.flaticon.com/128/2626/2626269.png" ,
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
                name: 'audience'
            }
        ]
    },
    {
        name: 'Facebook Bio Generator',
        desc: 'An AI tool that generates a captivating bio for your Facebook profile.',
        category: 'Facebook',
        icon: "https://cdn-icons-png.flaticon.com/128/15051/15051154.png",
        aiPrompt: 'Generate a creative and engaging Facebook bio based on the given personality traits and interests.',
        slug: 'generate-facebook-bio',
        form: [
            {
                label: 'Enter your personality traits',
                field: 'textarea',
                name: 'traits',
                required: true
            },
            {
                label: 'Enter your interests or hobbies',
                field: 'textarea',
                name: 'interests',
                required: true
            }
        ]
    },    
    {
        name: 'Instagram Hashtags',
        desc: 'An AI tool that generates relevant hashtags for Instagram posts.',
        category: 'Instagram',
        icon: "https://cdn-icons-png.flaticon.com/128/7045/7045400.png" ,
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
        name: 'Instagram Video Content Ideas',
        desc: 'An AI tool that generates content ideas for Instagram videos.',
        category: 'Instagram',
        icon: "https://cdn-icons-png.flaticon.com/128/5692/5692184.png",
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
                name: 'theme'
            }
        ]
    },
    {
        name: 'Instagram Bio Generator',
        desc: 'An AI tool that creates an engaging Instagram bio to attract followers.',
        category: 'Instagram',
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        aiPrompt: 'Generate a creative and captivating Instagram bio based on the given theme, niche, and personality traits.',
        slug: 'generate-instagram-bio',
        form: [
            {
                label: 'Enter your theme or niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter your personality traits',
                field: 'textarea',
                name: 'traits',
                required: true
            }
        ]
    },    
    {
        name: 'Keyword Research Tool',
        desc: 'An AI tool that helps you find the best keywords for your content or campaign.',
        category: 'SEO',
        icon: "https://cdn-icons-png.flaticon.com/128/6155/6155914.png",
        aiPrompt: 'Generate a list of 10 high-ranking keywords based on the provided niche and audience. Include search volume and keyword difficulty. Include sub-keywords too',
        slug: 'keyword-research-tool',
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
                required: true
            }
        ]
    },
    {
        name: 'LinkedIn Bio Generator',
        desc: 'An AI tool that generates a professional LinkedIn bio to enhance your profile.',
        category: 'LinkedIn',
        icon: "https://cdn-icons-png.flaticon.com/128/3488/3488311.png",
        aiPrompt: 'Generate a professional LinkedIn bio based on the given profession, skills, and achievements.',
        slug: 'generate-linkedin-bio',
        form: [
            {
                label: 'Enter your profession or role',
                field: 'input',
                name: 'profession',
                required: true
            },
            {
                label: 'Enter your key skills',
                field: 'textarea',
                name: 'skills',
                required: true
            },
            {
                label: 'Enter your achievements or experiences',
                field: 'textarea',
                name: 'achievements'
            }
        ]
    },
    {
        name: 'LinkedIn Content Generator',
        desc: 'An AI tool that generates engaging LinkedIn content based on the given topic and target audience.',
        category: 'LinkedIn',
        icon: "https://cdn-icons-png.flaticon.com/128/14449/14449766.png",
        aiPrompt: 'Generate a professional and engaging LinkedIn post based on the provided topic and audience. Include relevant insights, call-to-actions, and hashtags.',
        slug: 'generate-linkedin-content',
        form: [
            {
                label: 'Enter the topic or subject',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
                required: true
            }
        ]
    },     
    {
        name: 'LinkedIn Content Ideas',
        desc: 'An AI tool that generates content ideas for LinkedIn posts.',
        category: 'LinkedIn',
        icon: "https://cdn-icons-png.flaticon.com/128/174/174857.png",
        aiPrompt: 'Generate 5 engaging LinkedIn content ideas based on the provided profession and target audience.',
        slug: 'generate-linkedin-content-ideas',
        form: [
            {
                label: 'Enter your profession or role',
                field: 'input',
                name: 'profession',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience'
            }
        ]
    },       
    {
        name: 'Plagiarism Checker',
        desc: 'An AI tool that checks for plagiarism in your content.',
        category: 'Utility',
        icon: "https://cdn-icons-png.flaticon.com/128/3146/3146092.png",
        aiPrompt: 'Check the provided content for any plagiarized sections and provide a plagiarism report.',
        slug: 'check-plagiarism',
        form: [
            {
                label: 'Enter your content to check',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Product Description Generator',
        desc: 'An AI tool that creates compelling product descriptions for your e-commerce store.',
        category: 'E-commerce',
        icon: "https://cdn-icons-png.flaticon.com/128/5891/5891426.png",
        aiPrompt: 'Generate a detailed and persuasive product description based on the given product features and target audience.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'features',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'textarea',
                name: 'audience',
                required: true
            }
        ]
    },
    
    {
        name: 'Quote Generator',
        desc: 'An AI tool that generates inspiring quotes for social media or other content.',
        category: 'Utility',
        icon: "https://cdn-icons-png.flaticon.com/128/14753/14753811.png",
        aiPrompt: 'Generate 20 inspiring and unique quotes related to the given theme or keyword.',
        slug: 'generate-quote',
        form: [
            {
                label: 'Enter theme or keyword',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    {
        name: 'TikTok Content Ideas',
        desc: 'An AI tool that generates content ideas for TikTok videos.',
        category: 'TikTok',
        icon: "https://cdn-icons-png.flaticon.com/128/4782/4782345.png",
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
                name: 'trend'
            }
        ]
    },
    {
        name: 'TikTok Hashtags',
        desc: 'An AI tool that generates relevant hashtags for TikTok videos.',
        category: 'TikTok',
        icon: "https://cdn-icons-png.flaticon.com/128/7754/7754205.png",
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
        name: 'X Bio Generator',
        desc: 'An AI tool that generates a concise and impactful X bio.',
        category: 'Twitter',
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png",
        aiPrompt: 'Generate a short and engaging X(Twitter) bio based on the given profession, interests, and personality traits.',
        slug: 'generate-twitter-bio',
        form: [
            {
                label: 'Enter your profession or role',
                field: 'input',
                name: 'profession',
                required: true
            },
            {
                label: 'Enter your interests or hobbies',
                field: 'textarea',
                name: 'interests',
                required: true
            },
            {
                label: 'Enter your personality traits',
                field: 'textarea',
                name: 'traits'
            }
        ]
    },
    {
        name: 'X Thread Maker',
        desc: 'An AI tool that creates engaging X threads based on the given topic and key points.',
        category: 'Twitter',
        icon: "https://cdn-icons-png.flaticon.com/128/5969/5969020.png",
        aiPrompt: 'Create a detailed X(Twitter) thread based on the provided topic and key points. Ensure each tweet is concise, engaging, and includes relevant hashtags.',
        slug: 'generate-twitter-thread',
        form: [
            {
                label: 'Enter the main topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter key points (one per line)',
                field: 'textarea',
                name: 'keyPoints',
                required: true
            },
            {
                label: 'Include hashtags (optional)',
                field: 'textarea',
                name: 'hashtags'
            }
        ]
    },    
    {
        name: 'YouTube Content Generator',
        desc: 'An AI tool that generates YouTube video scripts and content ideas.',
        category: 'YouTube',
        icon: "https://cdn-icons-png.flaticon.com/128/1409/1409936.png",
        aiPrompt: 'Generate a YouTube video script based on the given niche and outline, including an engaging intro and outro.',
        slug: 'generate-youtube-content',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter video outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'YouTube SEO',
        desc: 'An AI tool that generates optimized YouTube titles, descriptions, and tags.',
        category: 'SEO',
        icon: "https://cdn-icons-png.flaticon.com/128/15714/15714787.png" ,
        aiPrompt: 'Generate optimized YouTube titles, descriptions, and tags based on the given video content and keywords.',
        slug: 'generate-youtube-seo',
        form: [
            {
                label: 'Enter video content description',
                field: 'textarea',
                name: 'contentDescription',
                required: true
            },
            {
                label: 'Enter keywords',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    }
];
