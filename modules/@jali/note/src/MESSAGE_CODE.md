## Schema 0: SHORT

```
0123 4567
|||| |
CVPS BBBB 
|||| |    Pos From   To   Segment Name
|||| |    --- ----   ---- ----------------------
|||| +---   4 0000 - FFFF Base Code
|||+-----   3    0 -    F Severity
||+------   2    0 -    F Priority
|+--------  1    0 -    F Schema Version
+---------  0    0        Schema
```

## Schema 1: STANDARD
```
            1
0123 4567 8901 2345
|||    |  | || |
CVAA AADD LLPS BBBB 
|||    |  | || |    Pos From   To   Segment Name
|||    |  | || |    --- ----   ---- ----------------------
|||    |  | || +---  12 0000 - FFFF Base Code
|||    |  | |+-----  11    0 -    F Severity
|||    |  | +------  10    0 -    F Priority
|||    |  +--------   8   00 -   FF Library
|||    +-----------   6   00 -   FF Domain
||+----------------   2 0000 - FFFF Authority (Registered)
|+-----------------   1    0      F Schema Version
+------------------   0    1        Schema
```

## Schema 2: EXTENDED
```
            1            2           3
0123 4567 8901 2345 6789 0123 4567 8901
|||       |         |      || |
CVAA AAAA DDDD DDDD LLLL LLPS BBBB BBBB 
|||       |         |      || |         Pos From        To        Segment Name
|||       |         |      || |         --- ---------   --------- ----------------------
|||       |         |      || +--------  24 0000 0000 - FFFF FFFF Base Code
|||       |         |      |+----------  23         0 -         F Severity
|||       |         |      +-----------  22         0 -         F Priority
|||       |         +------------------  16   00 0000 -   FF FFFF Library
|||       +----------------------------   8   00 0000 -   FF FFFF Domain
||+------------------------------------   2   00 0000 -   FF FFFF Authority (Registered)
|+-------------------------------------   1         0 -         F Schema Version
+--------------------------------------   0         2             Schema

```