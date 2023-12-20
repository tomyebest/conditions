# logic to recommend where to surf based on conditions

## location: Sunshine Coast (east facing)

### if wind speed is > 5 knots

- 1. if winds are W or WNW or WSW && wave height is => 0.5m &&  =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Try the open beaches';
- 2. if winds are NW or N or NNE && wave height is => 0.5m && =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Seek shelter at a backbeach';
- 3. if winds are SW or SSW && wave height is => 0.5m && =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Find shelter at or up to 200m from a north-facing headland';

- 4. if winds are W or WNW or WSW or NW or SW or SSW && wave height is > 1.5m &&  =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'Try the outer points (knowing your limitations)';
- 5. if winds are N or NNE or NE or ENE or E && wave height is > 1.5m && =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'It's probably not worth it';
-  6. if winds are S or SSE or SE or ESE && wave height is > 1.5m && =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'Head to a pointbreak. Exercise patience and the utmost etiquette';

-  7. if wave height is > 0.5m && wave period is =< 6 seconds : RETURN 'It looks like a windswell in the water. Go check out your local but keep expectations low'; 
- 8. if wave period is > 12 seconds: RETURN 'It looks like a solid groundswell in the water. Check out the surf report and know your limitations';

- 9. if wave height =< 0.5m : RETURN 'There doesn't seem to be much surf around. It wouldn't hurt to suss your local beachie, though';

### if wind speed is <= 5 knots

- 10. if wave period is > 12 seconds: RETURN 'It looks like a solid groundswell in the water. Check out the surf report and know your limitations';
- 11. if wave height is > 0.5m && wave period is =< 6 seconds : RETURN 'It looks like a windswell in the water. Go check out your local but keep expectations low'; 
- 12. if wave height =< 0.5m : RETURN 'There doesn't seem to be much surf around. It wou1ldn't hurt to suss your local beachie, though';
- 13. if wave height is => 0.5m &&  =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Try the open beaches';
- 14. if wave height is > 1.5m && =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'It's probably pumping on the open beaches. Check the tides & know your limitations. The outer points are also worth consideration';


### if wave height is < 2.5m 

- 15. if wave height is < 2.5m : RETURN 'Experienced surfers only.'; 


### ELSE 

- 16. else : RETURN 'Flag it. Take your significant other out for coffee instead - or do something productive for once, you degenerate.'