app.controller("OptionsController", [
  "$scope",
  function ($scope) {
    $scope.test = "Test text";
    $scope.addData = () => {
      const testData = {
        reviewLibrary:
          '["I can feel the writers love for her husband but would like to know more about the time period this was written in. Some parts sound out of rhythm when read aloud so I would like to hear it in the original pronunciation.","I feel a sense of deep unrequited love that the poet has for Constatia. While he sees beauty in it, he also feel weakness in the face of love.","Going into winter while reading this, I can relate to the longing for spring that Clare feels. Just the mere sight of spring birds gives the landscape a warmth. Surrounded by the sights of winter, dead grass and thistles, one can only wait for the meadows and birds to come."]',
        poemLibrary:
          '[{"date":"Tue Nov 21 2023","poem":{"title":"To My Dear And Loving Husband","author":"Anne Bradstreet","lines":["If ever two were one, then surely we.","If ever man were lov\'d by wife, then thee.","If ever wife was happy in a man,","Compare with me, ye women, if you can.","I prize thy love more than whole Mines of gold","Or all the riches that the East doth hold.","My love is such that Rivers cannot quench,","Nor ought but love from thee give recompetence.","Thy love is such I can no way repay.","The heavens reward thee manifold, I pray.","Then while we live, in love let\'s so persever","That when we live no more, we may live ever."],"linecount":"12"}},{"date":"Wed Nov 22 2023","poem":{"title":"To Constantia","author":"Percy Bysshe Shelley","lines":["The rose that drinks the fountain dew","In the pleasant air of noon,","Grows pale and blue with altered hue--","In the gaze of the nightly moon;","For the planet of frost, so cold and bright,","Makes it wan with her borrowed light.","","Such is my heart--roses are fair,","And that at best a withered blossom;","But thy false care did idly wear","Its withered leaves in a faithless bosom;","And fed with love, like air and dew,","Its growth--"],"linecount":"12"}},{"date":"Thu Nov 23 2023","poem":{"title":"The Yellowhammer","author":"John Clare","lines":["When shall I see the white-thorn leaves agen,","  And yellowhammers gathering the dry bents","By the dyke side, on stilly moor or fen,","  Feathered with love and nature\'s good intents?","Rude is the tent this architect invents,","  Rural the place, with cart ruts by dyke side.","Dead grass, horse hair, and downy-headed bents","  Tied to dead thistles--she doth well provide,","Close to a hill of ants where cowslips bloom","And shed oer meadows far their sweet perfume.","  In early spring, when winds blow chilly cold,","The yellowhammer, trailing grass, will come","To fix a place and choose an early home,","  With yellow breast and head of solid gold."],"linecount":"14"}}]',
      };
      localStorage = testData;
    };
    $scope.clearData = () => {
      localStorage.clear();
    };
  },
]);
