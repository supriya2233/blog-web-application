const express = require("express");

// ========================================
// CREATE EXPRESS APP
// ========================================

const app = express();

const PORT = 3000;


// Temporary in-memory storage for blog posts
let posts = [
    {
        id: 1,
        title: "The Art of Deep Work in a Distracted World",
        category: "Productivity",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "We live in an age of infinite scroll and constant notifications. Your phone buzzes, a Slack message pops up, someone tags you in a meme — and just like that, the thought you were building collapses like a house of cards."
            },

            {
                type: "paragraph",
                text: "Deep work isn't a productivity hack. It's a philosophy. Cal Newport defines it as \"professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.\" The uncomfortable truth? Most of us haven't truly experienced it in months."
            },

            {
                type: "heading",
                text: "Why it matters more than ever"
            },

            {
                type: "paragraph",
                text: "Shallow work — emails, meetings, quick replies — is becoming automated. What stays irreplaceable is the ability to think hard about complex problems. Deep work is your competitive edge, and most people are voluntarily giving it up for the dopamine hit of a notification."
            },

            {
                type: "heading",
                text: "How to actually practice it"
            },

            {
                type: "paragraph",
                text: "Start small. Block one 90-minute window each morning before you open your inbox. Put your phone in another room — not face down, not on silent, in another room. Pick one task the night before so you don't waste those 90 minutes deciding what to work on."
            },

            {
                type: "paragraph",
                text: "Then protect that window like a meeting with your most important client. Because in a sense, it is — that client is your future self. The people who learn to work deeply in a distracted world won't just survive the coming decade. They'll define it."
            }
        ]
    },


    {
        id: 2,
        title: "Why Your Morning Routine Is Probably Backwards",
        category: "Lifestyle",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "Every productivity influencer will tell you to wake up at 5 AM, journal, meditate, cold plunge, read 30 pages, and workout — all before 7 AM. It sounds inspiring until you actually try it and feel like a failure by Tuesday."
            },

            {
                type: "heading",
                text: "The mistake most people make"
            },

            {
                type: "paragraph",
                text: "They design their morning for the version of themselves they want to be, not the one who actually wakes up groggy at 6:30 needing coffee before a coherent thought is possible. The result is an aspirational routine that collapses under real life."
            },

            {
                type: "heading",
                text: "What actually works"
            },

            {
                type: "paragraph",
                text: "Identify the one non-negotiable thing that puts you in the right headspace. For some people it's 10 minutes of silence. For others it's a walk. For others it's skimming a physical newspaper over coffee."
            },

            {
                type: "paragraph",
                text: "Build around that one anchor. Add things only when the anchor is so automatic it costs you nothing. A morning routine isn't a checklist — it's a mood you're trying to create. The goal of your morning isn't to maximize output before 8 AM. It's to show up to your actual life with enough clarity and calm to do it well. Everything else is optional."
            }
        ]
    },


    {
        id: 3,
        title: "A Beginner's Honest Guide to Learning Programming",
        category: "Technology",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "Everyone says \"just start coding.\" Great advice. But start with what? Python? JavaScript? C++? And then what — watch a 40-hour YouTube course and hope something sticks? The honest answer is that most people don't fail at programming because they aren't smart enough. They fail because nobody told them what the first six months actually look like."
            },

            {
                type: "heading",
                text: "It's going to be confusing, and that's fine"
            },

            {
                type: "paragraph",
                text: "Error messages will feel personal. You'll spend three hours debugging something that turns out to be a missing comma. You'll copy code from Stack Overflow without fully understanding it. All of this is normal. It's part of the process, not a sign you're doing it wrong."
            },

            {
                type: "heading",
                text: "Pick one language and one project"
            },

            {
                type: "paragraph",
                text: "Don't learn Python and JavaScript simultaneously. Pick one. Then immediately pick a small project — a to-do app, a simple calculator, a script that renames your files. Learning without building is like studying swimming without water."
            },

            {
                type: "heading",
                text: "The progress curve is brutal, then beautiful"
            },

            {
                type: "paragraph",
                text: "For the first two months, you'll feel like you're learning nothing. Then one day, something clicks. You'll read someone else's code and understand it. You'll write a function from scratch and it'll work on the first try. That feeling is the reason millions of people are obsessed with programming. Stick through the brutal part. The beautiful part is real."
            }
        ]
    },


    {
        id: 4,
        title: "What Traveling Alone Teaches You That Nothing Else Can",
        category: "Travel",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "Solo travel is one of those things that sounds terrifying until you do it once, after which it becomes the thing you'd give up almost anything else to keep doing. The first time I traveled alone, I missed a connecting flight in Istanbul, couldn't find my hostel, and ended up eating a questionable kebab at midnight while sitting on cobblestones I couldn't identify. It was, genuinely, one of the best nights of my life."
            },

            {
                type: "heading",
                text: "The real education"
            },

            {
                type: "paragraph",
                text: "When you travel alone, every decision is yours — and so is every consequence. You choose where to eat, when to sleep, what to see, and when to leave. Nobody is negotiating with you. Nobody is waiting on you. For the first time in a long time, you find out what you actually want."
            },

            {
                type: "paragraph",
                text: "You also find out what you're capable of. Navigating a foreign transit system in a language you don't speak. Asking a stranger for directions using only hand gestures. These small wins compound into a quiet confidence that's hard to manufacture any other way."
            },

            {
                type: "heading",
                text: "What you lose"
            },

            {
                type: "paragraph",
                text: "The comfort of someone else making decisions. The social buffer of a companion. The ability to say \"we\" when you tell the story later."
            },

            {
                type: "heading",
                text: "What you gain"
            },

            {
                type: "paragraph",
                text: "Yourself, a little more clearly."
            }
        ]
    },


    {
        id: 5,
        title: "The Real Reason Most Side Projects Die",
        category: "Entrepreneurship",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "You had a great idea. You built a prototype on a weekend. You showed it to three friends who said \"this is amazing, you should launch it.\" Then you spent four months perfecting the landing page, decided the name wasn't right, rebuilt the backend in a different framework, and quietly stopped working on it."
            },

            {
                type: "heading",
                text: "The brutal diagnosis"
            },

            {
                type: "paragraph",
                text: "Most side projects don't die from technical problems. They die from a very specific type of fear: the fear of shipping something imperfect to an audience that might not care. Endless refinement is procrastination in a productive costume."
            },

            {
                type: "heading",
                text: "The fix isn't motivation"
            },

            {
                type: "paragraph",
                text: "You can't motivation your way out of this. What you need is a forcing function. Give yourself a public deadline. Tell someone you'll show them a working version by Friday. Post in a community. Enter a hackathon."
            },

            {
                type: "paragraph",
                text: "External accountability works because it transforms the abstract fear of failure into the concrete embarrassment of explaining why you didn't ship."
            },

            {
                type: "heading",
                text: "The good news"
            },

            {
                type: "paragraph",
                text: "The first version doesn't need to be good. It needs to exist. You learn more from ten real users using a mediocre product than from one hundred hours of solitary refinement. Ship the ugly version. Fix it after."
            }
        ]
    },


    {
        id: 6,
        title: "How to Actually Read More Books (Without Hacks or Tricks)",
        category: "Self-Improvement",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "\"I want to read more books\" is one of the most common things people say and one of the least common things people actually do. Not because they don't have time. Because they haven't made reading the default activity for certain moments."
            },

            {
                type: "heading",
                text: "The phone is the enemy"
            },

            {
                type: "paragraph",
                text: "When you're waiting for coffee, you reach for your phone. When you're in bed for those 15 minutes before sleep, you reach for your phone. Reading doesn't lose to Netflix because Netflix is better. Reading loses because the phone is easier to reach. The single most effective thing you can do is put a physical book in every space where you'd otherwise use your phone. One by the bed. One by the couch. One in your bag. One in the bathroom if you're honest about yourself."
            },

            {
                type: "heading",
                text: "Stop finishing books you hate"
            },

            {
                type: "paragraph",
                text: "The belief that you must finish every book you start is a legacy of school assignments. It has no place in a reading life. If you're 80 pages in and the book isn't earning your attention, put it down. Life is too short and the stack is too tall."
            },

            {
                type: "heading",
                text: "Lower the bar for what counts"
            },

            {
                type: "paragraph",
                text: "Read what genuinely interests you. Graphic novels count. Pulpy thrillers count. Re-reading an old favorite counts. The goal isn't to impress an imaginary committee. It's to spend more time with ideas and stories. Any book that does that is the right book."
            }
        ]
    },


    {
        id: 7,
        title: "Understanding Money in Your 20s: What School Never Taught You",
        category: "Finance",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "Nobody sat you down at 22 and explained compound interest in a way that made you feel it in your chest. Nobody showed you what ₹5,000 a month invested at 25 looks like at 55 versus starting at 35. If they had, you'd have taken it more seriously."
            },

            {
                type: "heading",
                text: "The one concept that changes everything"
            },

            {
                type: "paragraph",
                text: "Compound interest is the only mathematical concept where the longer you wait to understand it, the more it costs you. Money invested today doesn't just grow — it grows, and then the growth grows, and then that growth grows. The longer it runs, the faster it accelerates. The enemy of compounding isn't bad investments. It's waiting."
            },

            {
                type: "heading",
                text: "Spending is a habit, not just a choice"
            },

            {
                type: "paragraph",
                text: "Most financial advice treats spending as a series of decisions. It's not. It's a pattern of habits shaped by your environment. If your phone has five shopping apps, you'll spend more. If your salary hits an account with automatic transfers to savings, you'll save more. Design your environment before you trust your willpower."
            },

            {
                type: "heading",
                text: "The uncomfortable question"
            },

            {
                type: "paragraph",
                text: "What does financial security actually mean to you? Not the abstract \"I want to be rich\" — the specific version. A paid-off home? The ability to take a year off work? A certain monthly income from investments? Without a specific goal, you're just saving into the void."
            },

            {
                type: "paragraph",
                text: "Name the goal. Build toward it. The rest is just arithmetic."
            }
        ]
    },


    {
        id: 8,
        title: "The Quiet Art of Doing Nothing",
        category: "Mental Health",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "Somewhere between childhood and adulthood, we forgot how to be bored. We replaced every idle moment with input — podcasts during walks, phones during meals, videos during workouts. We became afraid of our own thoughts."
            },

            {
                type: "paragraph",
                text: "The result is a generation that's constantly consuming and rarely processing. We have more information than any humans in history and less clarity than we'd like."
            },

            {
                type: "heading",
                text: "What boredom actually does"
            },

            {
                type: "paragraph",
                text: "Neuroscience has a term for the brain's idle state: the default mode network. When you're not focused on a task, this network activates. It's responsible for creativity, self-reflection, empathy, and consolidating memories. In other words, it does the work that focused attention can't."
            },

            {
                type: "paragraph",
                text: "Every time you reach for your phone to fill silence, you're interrupting this process."
            },

            {
                type: "heading",
                text: "What \"doing nothing\" looks like in practice"
            },

            {
                type: "paragraph",
                text: "It's not meditation (though that helps). It's simpler: a walk without headphones. Sitting with your coffee before you open your laptop. Staring out a window on a train. Letting your mind wander without directing it."
            },

            {
                type: "paragraph",
                text: "It feels uncomfortable at first. That discomfort is the resistance of a mind that's forgotten how to rest."
            },

            {
                type: "paragraph",
                text: "Give it ten minutes a day. The returns are slow, then enormous."
            }
        ]
    },


    {
        id: 9,
        title: "How Artificial Intelligence Is Changing the Way We Learn",
        category: "Technology / Education",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "Education has looked roughly the same for a century: a teacher explains, students listen, questions happen at the end. The model was designed for classrooms of thirty, not individuals with wildly different paces, interests, and learning styles."
            },

            {
                type: "paragraph",
                text: "AI is beginning to change that — not by replacing teachers, but by finally making personalized learning possible at scale."
            },

            {
                type: "heading",
                text: "What's already happening"
            },

            {
                type: "paragraph",
                text: "Adaptive learning platforms adjust in real time to what a student gets right and wrong, serving harder material when they're ready and revisiting concepts when they're not. AI tutors answer questions at 11 PM when no human teacher is available. Writing tools give instant feedback on clarity and structure."
            },

            {
                type: "paragraph",
                text: "For the first time, a student in a rural town with a slow internet connection can access something approaching the feedback loop that used to require an expensive tutor."
            },

            {
                type: "heading",
                text: "What it can't replace"
            },

            {
                type: "paragraph",
                text: "The moment a teacher notices a student is struggling not with the material but with something else entirely. The classroom debate that changes how you think about an argument. The mentor who believes in you before you believe in yourself."
            },

            {
                type: "paragraph",
                text: "AI can deliver information better and faster than almost any human. What it cannot do is care about the outcome the way a person does."
            },

            {
                type: "paragraph",
                text: "The best version of AI in education isn't a replacement. It's a very patient, always-available study partner — so that the human teachers can do the irreplaceable work."
            }
        ]
    },


    {
        id: 10,
        title: "The Small Things That Make a Life Feel Good",
        category: "Philosophy / Lifestyle",
        author: "Supriya",

        content: [
            {
                type: "paragraph",
                text: "We spend a lot of time optimizing for the big things — the career, the relationship, the house. And then the big things arrive, and life feels… roughly the same as before. The research has a name for this: the hedonic treadmill. We adapt to what we achieve and return to our baseline."
            },

            {
                type: "paragraph",
                text: "But there's a category of things that seem to resist adaptation. Small pleasures, consistently enjoyed."
            },

            {
                type: "heading",
                text: "What the research actually says"
            },

            {
                type: "paragraph",
                text: "Studies on well-being consistently find that frequency of positive experiences matters more than intensity. Ten small good moments in a week outweigh one large good moment. A great meal shared with a friend beats a luxury vacation that ends with exhaustion and credit card debt."
            },

            {
                type: "heading",
                text: "What this looks like in a real life"
            },

            {
                type: "paragraph",
                text: "The first cup of coffee made exactly right. A twenty-minute walk in a neighborhood you like. A phone call with someone you always mean to call more. A book that's so good you're annoyed when you have to put it down. Cooking something from scratch on a Sunday."
            },

            {
                type: "paragraph",
                text: "None of these scale. None of them go viral. They don't make for an impressive story at a dinner party."
            },

            {
                type: "paragraph",
                text: "But they are, quietly, what a good life is actually made of — and unlike most things worth having, they are almost entirely within reach right now."
            }
        ]
    }
];


// Assign createdAt timestamps to seed posts (spaced ~1 week apart).
const seedDates = [
    "2026-08-01", "2026-08-08", "2026-08-15", "2026-08-22", "2026-08-29",
    "2026-09-05", "2026-09-12", "2026-09-19", "2026-09-26", "2026-10-03"
];
posts.forEach((post, i) => { post.createdAt = new Date(seedDates[i]); });


// ========================================
// HELPER FUNCTIONS
// ========================================

// Convert the content entered in the textarea
// into our structured content format.

function formatContent(content) {

    const blocks = [];

    // Split content wherever there is a blank line.
    const sections = content
        .split(/\n\s*\n/)
        .map(section => section.trim())
        .filter(section => section.length > 0);


    sections.forEach(section => {

        // If a section starts with ##,
        // treat it as a heading.

        if (section.startsWith("## ")) {

            blocks.push({
                type: "heading",
                text: section.substring(3).trim()
            });

        }

        // Otherwise treat it as a paragraph.

        else {

            blocks.push({
                type: "paragraph",
                text: section
            });

        }

    });


    return blocks;
}


// Convert structured content back into text
// for the Edit form.

function contentToText(content) {

    if (!Array.isArray(content)) {
        return content || "";
    }


    return content
        .map(block => {

            if (block.type === "heading") {

                return `## ${block.text}`;

            }


            return block.text;

        })
        .join("\n\n");
}


// ========================================
// EXPRESS CONFIGURATION
// ========================================

// Use EJS as the template engine.

app.set("view engine", "ejs");


// Read data submitted through HTML forms.

app.use(
    express.urlencoded({
        extended: true
    })
);


// Serve CSS, JavaScript and other static files
// from the public folder.

app.use(express.static("public"));



// =========================
// HOME PAGE - SEARCH & FILTER
// =========================


app.get("/", (req, res) => {
    // Read search, category, sort, flash, and page number from the URL.
    const search = (req.query.search || "").trim();
    const category = (req.query.category || "").trim();
    const sort = req.query.sort || "newest";
    const flash = req.query.flash || null;

    const requestedPage = Number.parseInt(req.query.page, 10);
    const currentPage =
        Number.isInteger(requestedPage) && requestedPage > 0
            ? requestedPage
            : 1;

    // Number of posts to display on each page.
    const postsPerPage = 4;

    // Get unique categories from the current posts.
    const categories = [
        ...new Set(
            posts
                .map(post => post.category)
                .filter(Boolean)
        )
    ].sort((a, b) => a.localeCompare(b));

    // Filter posts by search text and category.
    const filteredPosts = posts.filter(post => {
        const searchText = search.toLowerCase();

        const contentText = Array.isArray(post.content)
            ? post.content.map(block => block.text).join(" ")
            : String(post.content || "");

        const matchesSearch =
            !searchText ||
            [
                post.title,
                post.author,
                post.category,
                contentText
            ].some(value =>
                String(value || "")
                    .toLowerCase()
                    .includes(searchText)
            );

        const matchesCategory =
            !category || post.category === category;

        return matchesSearch && matchesCategory;
    });

    // Sort the filtered results.
    filteredPosts.sort((a, b) => {
        if (sort === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
        if (sort === "az") return a.title.localeCompare(b.title);
        if (sort === "za") return b.title.localeCompare(a.title);
        // newest first (default)
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    // Calculate pagination using the filtered results.
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Keep page numbers within the valid range.
    const page = totalPages === 0
        ? 1
        : Math.min(currentPage, totalPages);

    const startIndex = (page - 1) * postsPerPage;
    const paginatedPosts = filteredPosts.slice(
        startIndex,
        startIndex + postsPerPage
    );

    // Render the homepage.
    res.render("index", {
        posts: paginatedPosts,
        categories,
        search,
        selectedCategory: category,
        sort,
        flash,
        currentPage: page,
        totalPages,
        totalPosts
    });
});



// ========================================
// CREATE POST
// SHOW FORM
// ========================================

app.get("/posts/new", (req, res) => {

    res.render("new");

});


// ========================================
// CREATE POST
// SUBMIT FORM
// ========================================

app.post("/posts", (req, res) => {

    const title = req.body.title?.trim();

    const category = req.body.category?.trim();

    const author = req.body.author?.trim();

    const content = req.body.content?.trim();


    // Validate fields.

    if (!title || !category || !author || !content) {

        return res
            .status(400)
            .render("new", {
                error: "All fields are required. Please fill in every field before publishing.",
                formData: { title, category, author, content }
            });

    }


    // Convert textarea content into
    // structured content blocks.

    const formattedContent = formatContent(content);


    // Create new post.

    const newPost = {

        id: Date.now(),

        title: title,

        category: category,

        author: author,

        content: formattedContent,

        createdAt: new Date()

    };


    // Add the new post to our array.

    posts.push(newPost);


    // Go back to homepage with success flash.

    res.redirect("/?flash=published");

});


// ========================================
// EDIT POST
// SHOW FORM
// ========================================

app.get("/posts/:id/edit", (req, res) => {

    const postId = Number(req.params.id);


    const post = posts.find(
        post => post.id === postId
    );


    // Post doesn't exist.

    if (!post) {

        return res
            .status(404)
            .send("Post not found");

    }


    // Convert structured content into
    // editable textarea text.

    const editableContent = contentToText(
        post.content
    );


    res.render("edit", {

        post: post,

        editableContent: editableContent

    });

});


// ========================================
// EDIT POST
// SAVE CHANGES
// ========================================

app.post("/posts/:id/edit", (req, res) => {

    const postId = Number(req.params.id);


    const post = posts.find(
        post => post.id === postId
    );


    // Post doesn't exist.

    if (!post) {

        return res
            .status(404)
            .send("Post not found");

    }


    const title = req.body.title?.trim();

    const category = req.body.category?.trim();

    const author = req.body.author?.trim();

    const content = req.body.content?.trim();


    // Validate fields.

    if (!title || !category || !author || !content) {

        const editableContent = contentToText(post.content);

        return res
            .status(400)
            .render("edit", {
                post,
                editableContent,
                error: "All fields are required. Please fill in every field before saving."
            });

    }


    // Convert textarea content into
    // structured blocks.

    const formattedContent = formatContent(content);


    // Update existing post.

    post.title = title;

    post.category = category;

    post.author = author;

    post.content = formattedContent;


    // Return to homepage with success flash.

    res.redirect("/?flash=updated");

});


// ========================================
// DELETE POST
// ========================================

app.post("/posts/:id/delete", (req, res) => {

    const postId = Number(req.params.id);


    const postIndex = posts.findIndex(
        post => post.id === postId
    );


    // Post doesn't exist.

    if (postIndex === -1) {

        return res
            .status(404)
            .send("Post not found");

    }


    // Remove post.

    posts.splice(postIndex, 1);


    // Return to homepage with success flash.

    res.redirect("/?flash=deleted");

});


// ========================================
// VIEW POST
// ========================================


app.get("/posts/:id", (req, res) => {

    const postId = Number(req.params.id);

    const post = posts.find(post => post.id === postId);

    if (!post) {
        return res.status(404).render("404");
    }

    res.render("post", { post });

});


// ========================================
// 404 PAGE
// ========================================

app.use((req, res) => {

    res.status(404).render("404");

});


// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});
