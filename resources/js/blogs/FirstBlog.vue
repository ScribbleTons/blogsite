<template>
<div>
    <div id="articles-post" class="container-fluid">
        <h2>How to choose a programming language?</h2>
        <img class="article-image container" src="https://assets.mkdev.me/posts/covers/000/000/112/original/how-to-choose-a-programming-language.png?1491912211" alt="Image of confused programmer trying to choose a language">
        <cite>
            <span>Original blog link:</span>
            https://mkdev.me/en/posts/how-to-choose-a-programming-language
        </cite>

        <p class="articles-body container">
            By different estimations, the number of production-ready programming languages in the world varies from 400 to 600. And at least two orders of magnitude more experimental projects. How to make a good choice, having so many options? How to choose a language, which not only will turn out to be commercially in demand but also will bring joy in everyday practice? How will this choice show itself in the long-term?

            The criteria of choosing the first and the N-th language differ radically. This article describes the process of choosing <strong>the first language</strong>. What is meant by "the first" language? The one in which you can fulfill commercial orders! That means, if you have read something about a dozen of languages, but can't make it to the Junior in every of them, – this article can be useful for you.
        </p>
        <h3>The illusion of choice</h3>
        <p class="articles-body container">
            The first thing you have to understand is that you don't have much of a choice. It's not hard to pick out the TOP-10 of leaders from all the variety of languages. 80% of all that's happening is happening there. Precisely by Pareto. TOP-20 of "known" languages defines the boundaries of the reasonable choice (of the first language). One more ten of "small stuff" is for adventurers. "Fear and Loathing in Las Vegas" – next on the list.

            In alphabetical order:
        <ul>
            Top-10
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript/Typescript</li>
            <li>Object-C</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Scala</li>
        </ul>
        <ul>
            Top-20
            <li> Assemblers</li>
            <li> Clojure</li>
            <li>Delphi / Pascal</li>
            <li> F#</li>
            <li>Go</li>
            <li>Haskell</li>
            <li> Lua</li>
            <li>Perl</li>
            <li>Swift</li>
            <li>Visual Basic</li>
        </ul>
        Also, there is a separate group of specialized titles unrelated to the programming languages of general purpose <a href="https://mkdev.me/en/posts/how-to-choose-a-programming-language">Read more</a>
        </p>
    </div>
</div>
</template>

<script>
import Layout from './../pages/Blog'
export default {
    layout: Layout
}
</script>

<style lang="css">
#articles-post {
    background: rgb(243, 242, 242);
    color: black;
    padding: 5px;
}

#articles-post h2 {
    text-align: center;
    font-weight: bold;
    font-size: 2.3vw;
    padding: 4px;
}

#articles-post h3 {
    padding: 20px;
    text-align: left;

}

cite {
    padding: 4px;
    text-align: center;
    font-size: 8px;
    margin: auto 10px auto 6px;
}

.articles-body p {
    padding: 5px;
    text-align: justify;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 200;
    font-size: 1em;
}

@media (max-width: 768px) {
    #articles-post h2 {
        font-size: 5.3vw;
    }
}
</style>
