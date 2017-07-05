function solution(action) {
    switch (action) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score' :
            return score(this);
    }

    function score(post) {
        let rating = '';
        let totalVotes = post.upvotes + post.downvotes;
        let totalScore = post.upvotes - post.downvotes;

        let totalUpVotes = post.upvotes;
        let totalDownVotes = post.downvotes;

        if (totalVotes > 50) {
            let bonus = Math.ceil(Math.max(post.upvotes, post.downvotes) * 0.25);
            totalUpVotes = post.upvotes + bonus;
            totalDownVotes = post.downvotes + bonus;
        }

        if (totalVotes < 10) {
            rating = 'new';
        }
        else if (totalScore < 0) {
            rating = 'unpopular';
        }
        else if (post.upvotes / totalVotes > 0.66) {
            rating = 'hot';
        }
        else if (post.upvotes > 100 || post.downvotes > 100) {
            rating = 'controversial';
        }
        else {
            rating = 'new';
        }

        return [totalUpVotes, totalDownVotes, totalUpVotes - totalDownVotes, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}       // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']

console.log(score);
