"use strict";!function(t,o){o.behaviors.resizer={},o.behaviors.resizer.resizeTimer=null,o.behaviors.resizer.isMobile=!1,o.behaviors.resizer.isTabletPortrait=!1,o.behaviors.resizer.isTabletLandscape=!1,o.behaviors.resizer.isDesktop=!0,o.behaviors.resizer.deviceHasChanged=!1,o.behaviors.resizer.attach=function(e){t(window,e).resize(function(){clearTimeout(o.behaviors.resizer.resizeTimer),o.behaviors.resizer.resizeTimer=setTimeout(function(){o.attachBehaviors()},100)})},o.behaviors.checkViewport={attach:function(e){var s=o.behaviors.resizer,i=s.isMobile,a=s.isTabletLandscape,r=s.isDesktop;"block"===t(".hamburger",e).css("display")?(s.isMobile=!0,s.isTabletPortrait=!1,s.isTabletLandscape=!1,s.isDesktop=!1,t("body").addClass("is-mobile").removeClass("is-tablet-portrait").removeClass("is-tablet-landscape").removeClass("is-desktop"),768<=t(window).width()&&(s.isMobile=!1,s.isTabletPortrait=!0,s.isTabletLandscape=!1,s.isDesktop=!1,t("body").removeClass("is-mobile").addClass("is-tablet-portrait").removeClass("is-tablet-landscape").removeClass("is-desktop"))):(1024<=t(window).width()&&(s.isMobile=!1,s.isTabletPortrait=!1,s.isTabletLandscape=!0,s.isDesktop=!1,t("body").removeClass("is-mobile").removeClass("is-tablet-portrait").addClass("is-tablet-landscape").removeClass("is-desktop")),220===t(".header .logo").width()&&(s.isMobile=!1,s.isTabletPortrait=!1,s.isTabletLandscape=!1,s.isDesktop=!0,t("body").removeClass("is-mobile").removeClass("is-tablet-portrait").removeClass("is-tablet-landscape").addClass("is-desktop"))),s.deviceHasChanged=s.isMobile!==i||s.isTabletLandscape!==a||s.isDesktop!==r}}}(jQuery,Drupal,drupalSettings);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2l6ZXIuanMiXSwibmFtZXMiOlsiJCIsIkRydXBhbCIsImJlaGF2aW9ycyIsInJlc2l6ZXIiLCJyZXNpemVUaW1lciIsImlzTW9iaWxlIiwiaXNUYWJsZXRQb3J0cmFpdCIsImlzVGFibGV0TGFuZHNjYXBlIiwiaXNEZXNrdG9wIiwiZGV2aWNlSGFzQ2hhbmdlZCIsImF0dGFjaCIsImNvbnRleHQiLCJ3aW5kb3ciLCJyZXNpemUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXR0YWNoQmVoYXZpb3JzIiwiY2hlY2tWaWV3cG9ydCIsIiRvYmoiLCIkcHJldmlvdXNJc0Rlc2t0b3AiLCIkcHJldmlvdXNJc1RhYmxldExhbmRzY2FwZSIsImNzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ3aWR0aCIsIiRwcmV2aW91c0lzTW9iaWxlIiwiZHJ1cGFsU2V0dGluZ3MiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJjQUFBLFNBQXdCQSxFQUFHQyxHQUt2QkEsRUFBT0MsVUFBVUMsUUFBakIsR0FDQUYsRUFBT0MsVUFBVUMsUUFBUUMsWUFBYyxLQUN2Q0gsRUFBT0MsVUFBVUMsUUFBUUUsVUFBVyxFQUNwQ0osRUFBT0MsVUFBVUMsUUFBUUcsa0JBQW1CLEVBQzVDTCxFQUFPQyxVQUFVQyxRQUFRSSxtQkFBb0IsRUFDN0NOLEVBQU9DLFVBQVVDLFFBQVFLLFdBQVksRUFDckNQLEVBQU9DLFVBQVVDLFFBQVFNLGtCQUFtQixFQUU1Q1IsRUFBT0MsVUFBVUMsUUFBUU8sT0FBUyxTQUFTQyxHQUNyQ0MsRUFBQUEsT0FBUUQsR0FBU0UsT0FBTyxXQUN0QkMsYUFBbUJiLEVBQUNDLFVBQVVDLFFBQVFDLGFBQ2hDSCxFQUFDQyxVQUFVQyxRQUFRQyxZQUFjVyxXQUFXLFdBQVdkLEVBQUFlLG1CQUFBLFFBT3JFZixFQUFPQyxVQUFVZSxjQUFnQixDQUM3QlAsT0FBUSxTQUFBQyxHQUVKLElBQUlPLEVBQU9qQixFQUFPQyxVQUFVQyxRQUt4QmdCLEVBQTBCWCxFQUFBQSxTQUQxQlksRUFBNkJGLEVBQUtYLGtCQUloQ1ksRUFBdUJFLEVBQUliLFVBRzdCLFVBQUtELEVBQUFBLGFBQUxJLEdBQUFVLElBQUEsWUFDS2IsRUFBQUEsVUFBTCxFQUNDVSxFQUFTSSxrQkFBc0JDLEVBRmhDTCxFQUFLWCxtQkFBb0IsRUFLcEJLLEVBQUZKLFdBQXFCLEVBQ2ZILEVBQUFBLFFBQVdpQixTQUFoQixhQUFBQyxZQUFBLHNCQUFBQSxZQUFBLHVCQUFBQSxZQUFBLGNBR0EsS0FBS2YsRUFBQUEsUUFBWWdCLFVBQ1BELEVBQUFBLFVBQVksRUFDekJMLEVBQUFaLGtCQUFBLEVBRUFZLEVBQUFYLG1CQUFBLEVBRURXLEVBQUFWLFdBQUEsRUFDSVIsRUFBU3dCLFFBQVZELFlBQTBCLGFBQUFELFNBQUEsc0JBQUFDLFlBQUEsdUJBQUFBLFlBQUEsaUJBUTdCLE1BQUF2QixFQUFBWSxRQUFBWSxVQVBJTixFQUFLYixVQUFXLEVBQ2hCYSxFQUFLWixrQkFBbUIsRUFPdkJZLEVBQUFYLG1CQUE2QixFQUN6QkYsRUFBTEcsV0FBQSxFQUNLRixFQUFBQSxRQUFBQSxZQUFMLGFBQUFpQixZQUFBLHNCQUFBRCxTQUFBLHVCQUFBQyxZQUFBLGVBSUgsTUFBQXZCLEVBQUEsaUJBQUF3QixVQUlMTixFQUFBYixVQUFBLEVBUlFhLEVBQUtaLGtCQUFtQixFQUN4QlksRUFBS1gsbUJBQW9CLEVBUTVCRSxFQUFBQSxXQUF3QkosRUFJN0JMLEVBQUEsUUFBQXVCLFlBQUEsYUFBQUEsWUFBQSxzQkFBQUEsWUFBQSx1QkFBQUQsU0FBQSxnQkFVSEosRUFBQVQsaUJBQUFTLEVBQUFiLFdBQUFvQixHQWhFTFAsRUFBQVgsb0JBQUFhLEdBc0VlTSxFQUFBQSxZQTdGbkJQLElBQUEsQ0E2RkdRLE9BQVExQixPQUFReUIiLCJmaWxlIjoicmVzaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiByZXNpemVyU2NyaXB0KCQsIERydXBhbCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gV2luZG93cyBSZXNpemUgQmVoYXZpb3JcbiAgICBEcnVwYWwuYmVoYXZpb3JzLnJlc2l6ZXIgPSB7fTtcbiAgICBEcnVwYWwuYmVoYXZpb3JzLnJlc2l6ZXIucmVzaXplVGltZXIgPSBudWxsO1xuICAgIERydXBhbC5iZWhhdmlvcnMucmVzaXplci5pc01vYmlsZSA9IGZhbHNlO1xuICAgIERydXBhbC5iZWhhdmlvcnMucmVzaXplci5pc1RhYmxldFBvcnRyYWl0ID0gZmFsc2U7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5yZXNpemVyLmlzVGFibGV0TGFuZHNjYXBlID0gZmFsc2U7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5yZXNpemVyLmlzRGVza3RvcCA9IHRydWU7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5yZXNpemVyLmRldmljZUhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIERydXBhbC5iZWhhdmlvcnMucmVzaXplci5hdHRhY2ggPSBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgICQod2luZG93LCBjb250ZXh0KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoRHJ1cGFsLmJlaGF2aW9ycy5yZXNpemVyLnJlc2l6ZVRpbWVyKTtcbiAgICAgICAgICAgIERydXBhbC5iZWhhdmlvcnMucmVzaXplci5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IERydXBhbC5hdHRhY2hCZWhhdmlvcnMoKTsgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgICAvLyBDaGVjayBpZiBtb2JpbGUgZGV2aWNlIGJhc2VkIG9uIGhlYWRlciBjbGFzcyBkaXNwbGF5IG9uIG1lZGlhIHF1ZXJpZXNcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmNoZWNrVmlld3BvcnQgPSB7XG4gICAgICAgIGF0dGFjaDogZnVuY3Rpb24oY29udGV4dCkge1xuXG4gICAgICAgICAgICBsZXQgJG9iaiA9IERydXBhbC5iZWhhdmlvcnMucmVzaXplcjtcblxuICAgICAgICAgICAgLy8gU3RvcmUgcHJldmlvdXMgc3RhdHVzIG9mIGRldmljZVxuICAgICAgICAgICAgbGV0ICRwcmV2aW91c0lzTW9iaWxlID0gJG9iai5pc01vYmlsZTtcbiAgICAgICAgICAgIGxldCAkcHJldmlvdXNJc1RhYmxldExhbmRzY2FwZSA9ICRvYmouaXNUYWJsZXRMYW5kc2NhcGU7XG4gICAgICAgICAgICBsZXQgJHByZXZpb3VzSXNEZXNrdG9wID0gJG9iai5pc0Rlc2t0b3A7XG5cbiAgICAgICAgICAgIC8vIElmIE1vYmlsZVxuICAgICAgICAgICAgaWYgKCQoXCIuaGFtYnVyZ2VyXCIsIGNvbnRleHQpLmNzcyhcImRpc3BsYXlcIikgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICAkb2JqLmlzTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkb2JqLmlzVGFibGV0UG9ydHJhaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkb2JqLmlzVGFibGV0TGFuZHNjYXBlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJG9iai5pc0Rlc2t0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLW1vYmlsZScpLnJlbW92ZUNsYXNzKCdpcy10YWJsZXQtcG9ydHJhaXQnKS5yZW1vdmVDbGFzcygnaXMtdGFibGV0LWxhbmRzY2FwZScpLnJlbW92ZUNsYXNzKCdpcy1kZXNrdG9wJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0YWJsZXQgcG9ydHJhaXRcbiAgICAgICAgICAgICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+PSA3Njgpe1xuICAgICAgICAgICAgICAgICAgICAkb2JqLmlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRvYmouaXNUYWJsZXRQb3J0cmFpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICRvYmouaXNUYWJsZXRMYW5kc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJG9iai5pc0Rlc2t0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy1tb2JpbGUnKS5hZGRDbGFzcygnaXMtdGFibGV0LXBvcnRyYWl0JykucmVtb3ZlQ2xhc3MoJ2lzLXRhYmxldC1sYW5kc2NhcGUnKS5yZW1vdmVDbGFzcygnaXMtZGVza3RvcCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0YWJsZXQgbGFuZHNjYXBlXG4gICAgICAgICAgICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTAyNCl7XG4gICAgICAgICAgICAgICAgICAgICRvYmouaXNNb2JpbGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJG9iai5pc1RhYmxldFBvcnRyYWl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRvYmouaXNUYWJsZXRMYW5kc2NhcGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAkb2JqLmlzRGVza3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLW1vYmlsZScpLnJlbW92ZUNsYXNzKCdpcy10YWJsZXQtcG9ydHJhaXQnKS5hZGRDbGFzcygnaXMtdGFibGV0LWxhbmRzY2FwZScpLnJlbW92ZUNsYXNzKCdpcy1kZXNrdG9wJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSXMgRGVza3RvcFxuICAgICAgICAgICAgICAgIGlmKCQoJy5oZWFkZXIgLmxvZ28nKS53aWR0aCgpID09PSAyMjApe1xuICAgICAgICAgICAgICAgICAgICAkb2JqLmlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRvYmouaXNUYWJsZXRQb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkb2JqLmlzVGFibGV0TGFuZHNjYXBlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRvYmouaXNEZXNrdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy1tb2JpbGUnKS5yZW1vdmVDbGFzcygnaXMtdGFibGV0LXBvcnRyYWl0JykucmVtb3ZlQ2xhc3MoJ2lzLXRhYmxldC1sYW5kc2NhcGUnKS5hZGRDbGFzcygnaXMtZGVza3RvcCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb21wYXJlIHdpdGggcHJldmlvdXMgc3RhdHVzIHRvIHNlZSBpZiBpdCBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgJG9iai5kZXZpY2VIYXNDaGFuZ2VkID0gJG9iai5pc01vYmlsZSAhPT0gJHByZXZpb3VzSXNNb2JpbGVcbiAgICAgICAgICAgICAgICB8fCAkb2JqLmlzVGFibGV0TGFuZHNjYXBlICE9PSAkcHJldmlvdXNJc1RhYmxldExhbmRzY2FwZVxuICAgICAgICAgICAgICAgIHx8ICRvYmouaXNEZXNrdG9wICE9PSAkcHJldmlvdXNJc0Rlc2t0b3A7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXR1cyBNb2JpbGUgOlwiKyAgJG9iai5pc01vYmlsZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXR1cyBUYWJsZXQgUG9ydHJhaXQgOlwiKyAgJG9iai5pc1RhYmxldFBvcnRyYWl0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhdHVzIFRhYmxldCBMYW5kc2NhcGUgOlwiKyAgJG9iai5pc1RhYmxldExhbmRzY2FwZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXR1cyBEZXNrdG9wIDpcIisgICRvYmouaXNEZXNrdG9wKTtcbiAgICAgICAgICAgICovXG5cblxuXG5cbiAgICAgICAgfVxuICAgIH07XG5cblxuXG5cbn0pKGpRdWVyeSwgRHJ1cGFsLCBkcnVwYWxTZXR0aW5ncyk7XG4iXX0=
