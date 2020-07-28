"use strict";!function(a,e){e.behaviors.listing={},e.behaviors.listing.filterArr={},e.behaviors.listing.isotope="",e.behaviors.listing.isoContainer=a(".isotope"),e.behaviors.listing.isoGrid=e.behaviors.listing.isoContainer.find(".isoGrid"),e.behaviors.listing.linkFilter=e.behaviors.listing.isoContainer.find(".link-filter"),e.behaviors.listing.selectFilter=e.behaviors.listing.isoContainer.find(".filter-isotope select"),e.behaviors.listing.attach=function(i){var s=e.behaviors.listing;a(".listing.isotope",i).once("listing").each(function(){s.isoContainer.each(function(){s.isoGrid.append('<div class="iso-gutter"></div>'),s.isotope=s.isoGrid.isotope({masonry:{columnWidth:".iso-item",gutter:".iso-gutter"},itemSelector:".iso-item",percentPosition:!0}),s.isotope.imagesLoaded(e.behaviors.listing.isotope,function(){s.isotope.isotope("layout")}),s.selectFilter.on("change",function(){var i=a(this),t=i.val(),e=i.attr("data-filter-group");"all"!==t?s.filterArr[e]=t:delete s.filterArr[e],s.onChangeFilters()}),s.linkFilter.on("click",function(i){i.preventDefault(),i.stopPropagation();var t=a(this),e=t.attr("data-filter"),o=t.attr("data-filter-group");t.addClass("active").parent("li").siblings().find("a").removeClass("active"),"all"!==e?s.filterArr[o]=e:delete s.filterArr[o],s.onChangeFilters()})}),""!==window.location.hash&&s.updateList(),a(window).off("hashchange.form-fragment").on("hashchange",function(){s.updateList()})})},e.behaviors.listing.onChangeFilters=function(){var i=e.behaviors.listing;window.location.hash=i.createHashFilters(i.filterArr)},e.behaviors.listing.filterList=function(){var i=e.behaviors.listing,t=i.concatValues(i.filterArr);i.isotope.isotope({filter:t}).on("layoutComplete",function(){}),i.isotope.data("isotope").filteredItems.length?a(".isoGrid .no-results").hide():a(".isoGrid .no-results").fadeIn()},e.behaviors.listing.updateList=function(){var r,i,t;"#/all"!==window.location.hash?(r=window.location.hash.substr(2).split("&"),Object.keys(r).forEach(function(i){var t=r[i].split("="),e=t[0],o=t[1],s=a('.link-filter[data-filter-group="'+e+'"][data-filter="'+o+'"]'),n=a('.filter-isotope .filter-list[data-filter-group="'+e+'"]');0<s.length&&s.click(),0<n.length&&n.val(o).change().blur().dropdown("update")})):(i=a(".filter-isotope ul"),t=a(".filter-isotope select.filter-list"),0<i.length&&i.each(function(){a(this).find('.link-filter[data-filter="all"]').click()}),0<t.length&&t.each(function(){a(this).val("all").change().blur().dropdown("update")})),e.behaviors.listing.filterList()},e.behaviors.listing.concatValues=function(t){var e="";return Object.keys(t).forEach(function(i){e+=t[i]}),e},e.behaviors.listing.createHashFilters=function(i){var t="#/";return t+=0!==Object.keys(i).length?a.param(i):"all"}}(jQuery,Drupal);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzb3RvcGUuanMiXSwibmFtZXMiOlsiJCIsIkRydXBhbCIsImJlaGF2aW9ycyIsImxpc3RpbmciLCJmaWx0ZXJBcnIiLCJpc290b3BlIiwiaXNvQ29udGFpbmVyIiwiZmluZCIsImlzb0dyaWQiLCJhdHRhY2giLCJjb250ZXh0IiwiZWFjaCIsIl9vYmoiLCJhcHBlbmQiLCJtYXNvbnJ5IiwiZ3V0dGVyIiwicGVyY2VudFBvc2l0aW9uIiwiaW1hZ2VzTG9hZGVkIiwic2VsZWN0RmlsdGVyIiwib24iLCJ0aGlzIiwiZmlsdGVyIiwidGhhdCIsInZhbCIsImF0dHIiLCJmaWx0ZXJHcm91cCIsIm9uQ2hhbmdlRmlsdGVycyIsImxpbmtGaWx0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwidXBkYXRlTGlzdCIsIm9mZiIsImZpbHRlclZhbHVlIiwiY29uY2F0VmFsdWVzIiwiZmlsdGVyTGlzdCIsImdyb3VwIiwiYXJnQXJyIiwiZmlsdGVyZWRJdGVtcyIsImxlbmd0aCIsImhpZGUiLCJmYWRlSW4iLCJpdGVtQ29udGFpbmVycyIsInN1YnN0ciIsInNwbGl0IiwiT2JqZWN0Iiwia2V5cyIsImhhc2hBcnIiLCJmb3JFYWNoIiwicHJvcCIsInRlcm0iLCJmaWx0ZXJJdGVtIiwiZmlsdGVyU2VsZWN0Iiwic2VsZWN0Q29udGFpbmVycyIsImNoYW5nZSIsImJsdXIiLCJkcm9wZG93biIsInJlc3VsdCIsImNsaWNrIiwib2JqIiwiY3JlYXRlSGFzaEZpbHRlcnMiLCJwYXJhbSIsImpRdWVyeSJdLCJtYXBwaW5ncyI6ImNBQUMsU0FBdUJBLEVBQUdDLEdBRXZCQSxFQUFBQyxVQUFBQyxRQUFBLEdBR0FGLEVBQU9DLFVBQVVDLFFBQVFDLFVBQVksR0FEckNILEVBQU9DLFVBQVVDLFFBQWpCRSxRQUFBLEdB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cEMsSUFBQWtDLEdBQUFJLFNBQUFDLE9BQUFDLFNBQUEsY0FkR2QsRUFBaUJqRCxFQUFFLHNCQTBCeEJFLEVBQWtCdUMsRUFBQUEsc0NBRUksRUFBbEJZLEVBQVVFLFFBQ2JTLEVBQUFyRCxLQUFBLFdBREpYLEVBQUFvQixNQUFBYixLQUFBLG1DQUdBMEQsVUFyQmtDLEVBQTFCTCxFQUFpQmQsUUEyQnJCa0IsRUFBSnJELEtBQUEsV0FDV3lDLEVBQUFBLE1BQU9DLElBQUthLE9BQUtwQixTQUE1QmdCLE9BQUFDLFNBQUEsYUFRQTlELEVBQU8rRCxVQUFQN0QsUUFBQXVDLGNBcEJKekMsRUFBT0MsVUFBVUMsUUFBUXNDLGFBQWUsU0FBVXlCLEdBQzlDLElBQUlGLEVBQVMsR0FJYixPQUhBWixPQUFPQyxLQUFLYSxHQUFLWCxRQUFRLFNBQVNDLEdBQzlCUSxHQUFVRSxFQUFLVixLQUVaUSxHQUlYL0QsRUFBT0MsVUFBVUMsUUFBUWdFLGtCQUFvQixTQUFVRCxHQUVuRCxJQUFJRixFQUFTLEtBU2IsT0FMSUEsR0FEUyxJQUZGWixPQUFPQyxLQUFLYSxHQUFLcEIsT0FHZDlDLEVBQUVvRSxNQUFPRixHQUVULE9BeE5yQixDQWtPQ0csT0FBUXBFIiwiZmlsZSI6Imlzb3RvcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gbGlzdGluZ1NjcmlwdCgkLCBEcnVwYWwpIHtcclxuXHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5saXN0aW5nID0ge307XHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmxpc3RpbmcuZmlsdGVyQXJyID0ge307IC8vIE9iamVjdC8gYXJyYXkgV2hlcmUgd2Ugc3RvcmUgZmlsdGVycyBhbmQgdGhlaXIgZ3JvdXBcclxuICAgIERydXBhbC5iZWhhdmlvcnMubGlzdGluZy5pc290b3BlID0gJyc7IC8vIElzb3RvcGUgZWxlbWVudCBjcmVhdGVkIGJ5IGxpYnJhcnlcclxuICAgIERydXBhbC5iZWhhdmlvcnMubGlzdGluZy5pc29Db250YWluZXIgPSAkKFwiLmlzb3RvcGVcIik7XHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmxpc3RpbmcuaXNvR3JpZCA9IERydXBhbC5iZWhhdmlvcnMubGlzdGluZy5pc29Db250YWluZXIuZmluZChcIi5pc29HcmlkXCIpO1xyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5saXN0aW5nLmxpbmtGaWx0ZXIgPSBEcnVwYWwuYmVoYXZpb3JzLmxpc3RpbmcuaXNvQ29udGFpbmVyLmZpbmQoXCIubGluay1maWx0ZXJcIik7IC8vIFdoZW4gZmlsdGVycyBhcmUgYnV0dG9uIGxpbmsgbGFiZWxcclxuICAgIERydXBhbC5iZWhhdmlvcnMubGlzdGluZy5zZWxlY3RGaWx0ZXIgPSBEcnVwYWwuYmVoYXZpb3JzLmxpc3RpbmcuaXNvQ29udGFpbmVyLmZpbmQoXCIuZmlsdGVyLWlzb3RvcGUgc2VsZWN0XCIpOyAvLyBXaGVuIGZpbHRlcnMgYXJlIHNlbGVjdCBkcm9wZG93blxyXG5cclxuXHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmxpc3RpbmcuYXR0YWNoICA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcblxyXG4gICAgICAgIGxldCBfb2JqID0gRHJ1cGFsLmJlaGF2aW9ycy5saXN0aW5nO1xyXG5cclxuICAgICAgICAkKCcubGlzdGluZy5pc290b3BlJywgY29udGV4dCkub25jZSgnbGlzdGluZycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgX29iai5pc29Db250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkaW5nIGd1dHRlciBlbGVtZW50IGluIHRoZSBpc28gZ3JpZFxyXG4gICAgICAgICAgICAgICAgX29iai5pc29HcmlkLmFwcGVuZCgnPGRpdiBjbGFzcz1cImlzby1ndXR0ZXJcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXR0aW5nIHVwIElzb3RvcGUgbGlzdGluZ1xyXG4gICAgICAgICAgICAgICAgX29iai5pc290b3BlID0gX29iai5pc29HcmlkLmlzb3RvcGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc29ucnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcuaXNvLWl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBndXR0ZXI6ICcuaXNvLWd1dHRlcidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5pc28taXRlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMYXlvdXQgbGlzdCBvbmNlIGltYWdlcyBhcmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICBfb2JqLmlzb3RvcGUuaW1hZ2VzTG9hZGVkKERydXBhbC5iZWhhdmlvcnMubGlzdGluZy5pc290b3BlLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIF9vYmouaXNvdG9wZS5pc290b3BlKCdsYXlvdXQnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBmaWx0ZXIgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICBfb2JqLnNlbGVjdEZpbHRlci5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRoYXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSB0aGF0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJHcm91cCA9IHRoYXQuYXR0cignZGF0YS1maWx0ZXItZ3JvdXAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmaWx0ZXIgIT09ICdhbGwnICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9vYmouZmlsdGVyQXJyWyBmaWx0ZXJHcm91cCBdID0gZmlsdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX29iai5maWx0ZXJBcnJbIGZpbHRlckdyb3VwIF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBfb2JqLm9uQ2hhbmdlRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDbGljayBvbiBmaWx0ZXIgbGluayBvbiBpc290b3BlXHJcbiAgICAgICAgICAgICAgICBfb2JqLmxpbmtGaWx0ZXIub24oICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gdGhhdC5hdHRyKCdkYXRhLWZpbHRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJHcm91cCA9IHRoYXQuYXR0cignZGF0YS1maWx0ZXItZ3JvdXAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hZGRDbGFzcyhcImFjdGl2ZVwiKS5wYXJlbnQoJ2xpJykuc2libGluZ3MoKS5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZpbHRlciAhPT0gJ2FsbCcgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX29iai5maWx0ZXJBcnJbIGZpbHRlckdyb3VwIF0gPSBmaWx0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfb2JqLmZpbHRlckFyclsgZmlsdGVyR3JvdXAgXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9vYmoub25DaGFuZ2VGaWx0ZXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBJZiBoYXNoIGhhcyBiZWVuIHByb3ZpZGVkLCBzZXQgZmlsdGVyXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICBfb2JqLnVwZGF0ZUxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIE9uIGhhc2ggY2hhbmdlLCBjaGFuZ2UgZmlsdGVycyAoZGlzYWJsZSBmb3JtLmpzIGV2ZW50IGZpcnN0IGFzIGl0IGNvbmZsaWN0cyB3aXRoICMpXHJcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2UuZm9ybS1mcmFnbWVudCcpLm9uKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfb2JqLnVwZGF0ZUxpc3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTWF0Y2ggaGVpZ2h0cyBHcmlkIGxheW91dFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaWYoIURydXBhbC5iZWhhdmlvcnMucmVzaXplci5pc01vYmlsZSl7XHJcbiAgICAgICAgICAgICQoJy5ub2RlLXZpZXctZ3JpZC5pc28taXRlbSAuY29weScpLm1hdGNoSGVpZ2h0KHtieVJvdzogZmFsc2V9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLm5vZGUtdmlldy1ncmlkLmlzby1pdGVtIC5jb3B5JykubWF0Y2hIZWlnaHQoJ3JlbW92ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmxpc3Rpbmcub25DaGFuZ2VGaWx0ZXJzID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgbGV0IF9vYmogPSBEcnVwYWwuYmVoYXZpb3JzLmxpc3Rpbmc7XHJcblxyXG4gICAgICAgIC8vIFNldCBIYXNoIHRoYXQgd2lsbCB0cmlnZ2VyIHVwZGF0ZUxpc3QgbWV0aG9kXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBfb2JqLmNyZWF0ZUhhc2hGaWx0ZXJzKCBfb2JqLmZpbHRlckFyciApO1xyXG5cclxuICAgICAgICAvL0RydXBhbC5hdHRhY2hCZWhhdmlvcnMoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gRmlsdGVyIGxpc3QgYmFzZWQgb24gZmlsdGVyIHZhbHVlXHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmxpc3RpbmcuZmlsdGVyTGlzdCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGxldCBfb2JqID0gRHJ1cGFsLmJlaGF2aW9ycy5saXN0aW5nO1xyXG4gICAgICAgIGxldCBmaWx0ZXJWYWx1ZSA9IF9vYmouY29uY2F0VmFsdWVzKCBfb2JqLmZpbHRlckFyciApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgSXNvdG9wZVxyXG4gICAgICAgIF9vYmouaXNvdG9wZS5pc290b3BlKHsgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB9KVxyXG4gICAgICAgICAgICAub24oJ2xheW91dENvbXBsZXRlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vRHJ1cGFsLmJsYXp5LmluaXQucmV2YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTm8gcmVzdWx0c1xyXG4gICAgICAgIGlmICggIV9vYmouaXNvdG9wZS5kYXRhKCdpc290b3BlJykuZmlsdGVyZWRJdGVtcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICQoJy5pc29HcmlkIC5uby1yZXN1bHRzJykuZmFkZUluKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5pc29HcmlkIC5uby1yZXN1bHRzJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gVXBkYXRlIGFjdGl2ZSBsaW5rIGFuZCBzZWxlY3QgZnJvbSBoYXNoXHJcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmxpc3RpbmcudXBkYXRlTGlzdCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9PSAnIy9hbGwnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzaEFyciA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigyKS5zcGxpdChcIiZcIik7XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhoYXNoQXJyKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJnQXJyID0gaGFzaEFycltwcm9wXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSBhcmdBcnJbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVybSA9IGFyZ0FyclsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVySXRlbSA9ICQoJy5saW5rLWZpbHRlcltkYXRhLWZpbHRlci1ncm91cD1cIicgKyBncm91cCArICdcIl1bZGF0YS1maWx0ZXI9XCInICsgdGVybSArICdcIl0nKTtcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJTZWxlY3QgPSAkKCcuZmlsdGVyLWlzb3RvcGUgLmZpbHRlci1saXN0W2RhdGEtZmlsdGVyLWdyb3VwPVwiJyArIGdyb3VwICsgJ1wiXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCBmaWx0ZXJJdGVtLmxlbmd0aCA+IDAgKXtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJJdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiggZmlsdGVyU2VsZWN0Lmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyU2VsZWN0LnZhbCh0ZXJtKS5jaGFuZ2UoKS5ibHVyKCkuZHJvcGRvd24oXCJ1cGRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbUNvbnRhaW5lcnMgPSAkKCcuZmlsdGVyLWlzb3RvcGUgdWwnKTtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdENvbnRhaW5lcnMgPSAkKCcuZmlsdGVyLWlzb3RvcGUgc2VsZWN0LmZpbHRlci1saXN0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbUNvbnRhaW5lcnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBpdGVtQ29udGFpbmVycy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVySXRlbSA9ICQodGhpcykuZmluZCgnLmxpbmstZmlsdGVyW2RhdGEtZmlsdGVyPVwiYWxsXCJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVySXRlbS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RDb250YWluZXJzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0Q29udGFpbmVycy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgnYWxsJykuY2hhbmdlKCkuYmx1cigpLmRyb3Bkb3duKFwidXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIHRoZSBsaXN0IHdpdGggSXNvdG9wZVxyXG4gICAgICAgIERydXBhbC5iZWhhdmlvcnMubGlzdGluZy5maWx0ZXJMaXN0KCk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIERydXBhbC5iZWhhdmlvcnMubGlzdGluZy5jb25jYXRWYWx1ZXMgPSBmdW5jdGlvbiggb2JqICl7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBvYmpbIHByb3AgXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5saXN0aW5nLmNyZWF0ZUhhc2hGaWx0ZXJzID0gZnVuY3Rpb24oIG9iaiApe1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyMvJztcclxuICAgICAgICBsZXQgc2l6ZSA9IE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoc2l6ZSAhPT0gMCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAkLnBhcmFtKCBvYmogKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICdhbGwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxufShqUXVlcnksIERydXBhbCkpOyJdfQ==
